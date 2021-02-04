import Link from "next/link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function BlogPosts({blogs}) {
  return (
    <Box m={2} pt={2} pb={2}>
      <Typography variant="h6">Jump into my brain</Typography>
      {blogList(blogs)}
    </Box>
  );
}

function blogList(blogs) {
  return(
    <ul className="asterisk">
      {blogs.map((blog, idx) => {
        return blogLink(blog);
      })}
    </ul>
  ) ;
}

function blogLink(blog) {
  return (
    <li key={blog.id}>
      <Link href={`/posts/${blog.slug}`}>
        <a><Typography variant="body1">{blog.title}</Typography></a>
      </Link>
    </li>
  );
}