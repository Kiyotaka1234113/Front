import { GetServerSideProps } from "next";

export default function AboutSSR({ renderTime }: { renderTime: string }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>About Us (SSR)</h1>
      <p>This page is rendered on every request.</p>
      <div style={{ background: '#ffe6e6', padding: '1rem', borderRadius: '5px' }}>
        <strong>Rendered at:</strong> {new Date(renderTime).toLocaleTimeString()}
      </div>
      <p style={{ marginTop: '1rem', color: '#666' }}>Refresh the page. The time WILL change because the server rebuilds it.</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      renderTime: new Date().toISOString(),
    },
  };
};