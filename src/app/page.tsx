import { db } from "@/server/db";

export default async function HomePage() {
  const posts = await db.post.findMany();

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.createdAt.toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}
