import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Archive from "../templates/blog-archive";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Layout location={this.props.location}>
        <Link to='/posts'><button>See All Posts</button></Link>
      </Layout>
    )
  }
};

export default BlogIndex;