import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/types";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";
import Link from "next/link";

interface PostProps {
  post: Post;
  author: { name: string; bio: string };
}

export default function PostPage({ post, author }: PostProps) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px' }}>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>&larr; Back to Home</Link>
      <h1 style={{ marginTop: '1rem' }}>{post.title}</h1>
      <p style={{ fontStyle: 'italic', color: '#555' }}>
        By {author.name} - {author.bio}
      </p>
      <hr />
      <div style={{ margin: '2rem 0', lineHeight: '1.6' }}>
        <p>{post.content}</p>
      </div>
      <div>
        {post.tags.map(tag => (
          <span key={tag} style={{ background: '#eee', padding: '4px 8px', borderRadius: '4px', marginRight: '8px' }}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => ({ params: { id: post.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  
  if (!post) {
    return { notFound: true };
  }
  
  const authorData = await getAuthorById(post.author);
  const author = authorData || { name: "Unknown", bio: "No bio available" };

  return {
    props: { post, author },
    revalidate: 60,
  };
};