import React from "react";
import {AboutMe, BlogPosts, Contact, Jumbotron, NavBar} from "../components";

function IndexPage(props) {
  return (
    <React.Fragment>
      <NavBar/>
      <div className="container">
        <Jumbotron/>
        <AboutMe/>
        <BlogPosts blogs={props.blogs}/>
        <Contact/>
      </div>

      <style jsx global>
        {
          `html,
          body {
            font-family: Roboto;
          }`
        }
      </style>
    </React.Fragment>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

    // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}


export default IndexPage;
