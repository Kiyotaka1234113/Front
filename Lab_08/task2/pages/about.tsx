import { GetStaticProps } from "next";

export default function AboutSSG({ renderTime }: { renderTime: string }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>About Us (SSG)</h1>
      <p>This page was generated at build time.</p>
      <div style={{ background: '#e6ffe6', padding: '1rem', borderRadius: '5px' }}>
        <strong>Rendered at:</strong> {new Date(renderTime).toLocaleTimeString()}
      </div>
      <p style={{ marginTop: '1rem', color: '#666' }}>Refresh the page. The time will NOT change because it's static HTML.</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      renderTime: new Date().toISOString(),
    },
  };
};