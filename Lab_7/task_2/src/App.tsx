import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function Loading() {
  return <p>Loading...</p>;
}

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <nav>
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/settings">Settings</Link> |
        <Link to="/profile">Profile</Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;