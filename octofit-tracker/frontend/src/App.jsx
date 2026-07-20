import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <section className="hero-card">
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>Modern multi-tier fitness tracking</h1>
          <p>
            React 19 powers the presentation tier, Express and TypeScript serve the logic tier,
            and MongoDB provides the data tier.
          </p>
          <nav className="nav-links">
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/teams">Teams</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
            <NavLink to="/workouts">Workouts</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
