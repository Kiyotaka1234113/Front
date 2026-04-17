import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome, {user.name}</h1>
      <p style={{ color: '#666' }}>Role: <span style={{ fontWeight: 'bold' }}>{user.role}</span></p>
      
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ background: '#f4f4f4', padding: '1.5rem', borderRadius: '8px', flex: 1 }}>
          <h2>Analytics</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><strong>Page Views:</strong> {analytics.pageViews.toLocaleString()}</li>
            <li><strong>Sessions:</strong> {analytics.sessions.toLocaleString()}</li>
            <li><strong>Bounce Rate:</strong> {analytics.bounceRate.toFixed(1)}%</li>
          </ul>
        </div>

        <div style={{ background: '#f4f4f4', padding: '1.5rem', borderRadius: '8px', flex: 1 }}>
          <h2>Notifications ({unreadCount} unread)</h2>
          <ul style={{ paddingLeft: '1rem' }}>
            {notifications.map(notif => (
              <li key={notif.id} style={{ marginBottom: '10px' }}>
                <span style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', color: '#0070f3' }}>
                  [{notif.type}]
                </span>{' '}
                {notif.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#888' }}>
        Last updated (Server Time): {new Date(currentTime).toLocaleTimeString()}
      </p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};