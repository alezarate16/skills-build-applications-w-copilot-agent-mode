import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/workouts/`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.results || data.workouts || [];
        setWorkouts(items);
      } catch (error) {
        console.error('Failed to load workouts', error);
        setWorkouts([]);
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      {loading ? <p>Loading workouts…</p> : null}
      {!loading && workouts.length === 0 ? <p>No workouts found.</p> : null}
      <ul>
        {workouts.map((workout, index) => (
          <li key={workout.id || workout._id || `${workout.name || 'workout'}-${index}`}>
            {workout.name || 'Workout'}
          </li>
        ))}
      </ul>
    </section>
  );
}
