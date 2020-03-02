import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Pager from '../components/pager';
 
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
            siteMetadata {
              title
            }
          }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC},
        skip: $skip,
        limit: $limit
        ) {
          edges {
                    node {
                      excerpt
                      fields {
                        slug
                      }
                      frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                      }
                    }
                  }
    }
  }
`;

const BlogArchive = ({ data, pageContext, location }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={location}>
        {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3>
                    <Link to={node.fields.slug}> {title} </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }} />
                </section>
              </article>
            )
        })}

        <Pager pageContext={pageContext} />
      </Layout>
    )
};

export default BlogArchive;