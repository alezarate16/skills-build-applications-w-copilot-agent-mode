import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

// Example endpoint: https://<codespace>-8000.app.github.dev/api/teams/

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/teams/`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.results || data.teams || [];
        setTeams(items);
      } catch (error) {
        console.error('Failed to load teams', error);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      {loading ? <p>Loading teams…</p> : null}
      {!loading && teams.length === 0 ? <p>No teams found.</p> : null}
      <ul>
        {teams.map((team, index) => (
          <li key={team.id || team._id || `${team.name || 'team'}-${index}`}>
            {team.name || team.sport || 'Team'}
          </li>
        ))}
      </ul>
    </section>
  );
}
