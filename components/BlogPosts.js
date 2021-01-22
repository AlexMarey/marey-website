import Link from "next/link";

export default function BlogPosts({blogs}) {
  return (
    <div>
      <h3>Check these posts out</h3>
      <ul>
        {blogs.map((blog, idx) => {
          return (
            <li key={blog.id}>
              <Link href={`/posts/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

