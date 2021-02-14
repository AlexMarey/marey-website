import React from "react";
import {Layout} from "../../components";
import {ComponentContainer} from "../../components";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function BlogPostPage(props) {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box m={1} p={1}>
          <Typography variant="h6">{props.blog.title}</Typography>
          <Typography variant="subtitle1">By: {props.blog.author}</Typography>
          <Typography variant="subtitle2">Posted: {props.blog.date}</Typography>
          <section
            dangerouslySetInnerHTML={{ __html: props.blog.content }}
          ></section>
        </Box>
      </Container>
    </Layout>
  );
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/contents/${slug}.md`;

  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const fs = require("fs");

  const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;
