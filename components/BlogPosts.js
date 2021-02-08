import Link from "next/link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function BlogPosts({ blogs }) {
  return (
    <Box m={1} pt={1} pb={1}>
      <Typography variant="h6">Jump Into My Brain</Typography>
      {blogList(blogs)}
    </Box>
  );
}

function blogList(blogs) {
  return (
    <ul className="asterisk">
      {blogs.map((blog, idx) => {
        return blogLink(blog);
      })}
    </ul>
  );
}

function blogLink(blog) {
  return (
    <li key={blog.id}>
      <Link href={`/posts/${blog.slug}`} passHref>
        <Typography variant="body1" component="a">
          {blog.title}
        </Typography>
      </Link>
    </li>
  );
}
