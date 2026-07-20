import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/leaderboard/`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.results || data.leaderboard || [];
        setEntries(items);
      } catch (error) {
        console.error('Failed to load leaderboard', error);
        setEntries([]);
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      {loading ? <p>Loading leaderboard…</p> : null}
      {!loading && entries.length === 0 ? <p>No leaderboard entries found.</p> : null}
      <ul>
        {entries.map((entry, index) => (
          <li key={entry.id || entry._id || `${entry.rank || 'entry'}-${index}`}>
            {entry.rank || index + 1}: {entry.userId || entry.name || 'Player'}
          </li>
        ))}
      </ul>
    </section>
  );
}
