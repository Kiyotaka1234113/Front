import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>My Blog (SSG + ISR)</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h2>
              <Link href={`/posts/${post.id}`} style={{ textDecoration: 'none', color: '#0070f3' }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ color: '#666' }}>By Author ID: {post.author} | {post.readTime} min read</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60, // ISR: regenerate every 60 seconds
  };
};