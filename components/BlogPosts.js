import Link from "next/link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ComponentContainer from "./ComponentContainer";

export default function BlogPosts({ blogs }) {
  return (
    <ComponentContainer>
      <Box m={1} pt={1} pb={1}>
        <Typography variant="h6">Jump Into My Brain</Typography>
        {blogList(blogs)}
      </Box>
    </ComponentContainer>
  );
}

function blogComparer(a, b) {
  if (a.postId > b.postId) {
    return 1;
  } else if (a.postId < b.postId) {
    return -1;
  }
  return 0;
}

function blogList(blogs) {
  // Get the 5 most recent blogs
  blogs.sort(blogComparer);
  blogs.reverse().slice(4);

  return (
    <ul className="asterisk">
      {blogs.map((blog) => {
        return blogLink(blog);
      })}
    </ul>
  );
}

function blogLink(blog) {
  return (
    <li key={blog.id}>
      <Link href={`/posts/${blog.slug}`} passHref>
        <Typography variant="body1" component="a" className="linkUnderline">
          {blog.title} - {blog.date}
        </Typography>
      </Link>
    </li>
  );
}
