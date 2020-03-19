import React from "react";
import { Link, graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;

    return (

<div>
<Bio />
<Link to='/posts'><button>See All Posts</button></Link>

</div>      
      
    )
  }
};

export default BlogIndex;