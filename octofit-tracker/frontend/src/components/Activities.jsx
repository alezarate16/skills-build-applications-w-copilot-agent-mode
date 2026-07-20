import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

// Example endpoint: https://<codespace>-8000.app.github.dev/api/activities/

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/activities/`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.results || data.activities || [];
        setActivities(items);
      } catch (error) {
        console.error('Failed to load activities', error);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      {loading ? <p>Loading activities…</p> : null}
      {!loading && activities.length === 0 ? <p>No activities found.</p> : null}
      <ul>
        {activities.map((activity, index) => (
          <li key={activity.id || activity._id || `${activity.type || 'activity'}-${index}`}>
            {activity.type || 'Activity'}
          </li>
        ))}
      </ul>
    </section>
  );
}
