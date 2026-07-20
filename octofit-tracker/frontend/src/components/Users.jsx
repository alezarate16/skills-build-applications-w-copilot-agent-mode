import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

// Example endpoint: https://<codespace>-8000.app.github.dev/api/users/

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/users/`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.results || data.users || [];
        setUsers(items);
      } catch (error) {
        console.error('Failed to load users', error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {loading ? <p>Loading users…</p> : null}
      {!loading && users.length === 0 ? <p>No users found.</p> : null}
      <ul>
        {users.map((user, index) => (
          <li key={user.id || user._id || `${user.name || 'user'}-${index}`}>
            {user.name || user.email || 'User'}
          </li>
        ))}
      </ul>
    </section>
  );
}
