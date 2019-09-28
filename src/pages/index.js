import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function dateSort(a, b) {
  // sort posts by date
  const dateA = a.node.frontmatter.sortDate;
  const dateB = b.node.frontmatter.sortDate;

  let comparison = 0;
  if (dateA < dateB) {
    comparison = 1;
  } else if (dateA > dateB) {
    comparison = -1;
  }
  return comparison;
}

export default function ({ data }) {
  // convert other posts into consistent format with markdown
  var otherPosts = data.allOtherPostsYaml.nodes.map((post) => {
    return({node: {
      fields: {slug: post.URL},
      frontmatter: {title: post.Title, date: post.Date, excerpt: post.Excerpt, sortDate: post.sortDate}
    }})
  })
  var allPosts = [...otherPosts, ...data.allMarkdownRemark.edges].sort(dateSort);
  console.log(allPosts);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello</h1>
      <p>I'm a Denver native living and working in Washington, DC. I work on the Labs Team at <a href="https://bpimedia.com">Bully Pulpit Interactive,</a> where I'm building products at the intersection of politics, communications, data, and technology.</p>
      <h1>Social</h1>
      <p>You can find me online on <a href="https://twitter.com/joestemarie">Twitter</a> and <a href="https://www.linkedin.com/in/joestemarie/">LinkedIn</a>.</p>
      <h1>Writing</h1>
      <p>I really enjoy writing and find that it helps me focus my thinking.</p>
      <ul>
        {allPosts.map(({ node }) => (
          <li><a href={node.fields.slug}><b>{node.frontmatter.title}.</b> ({node.frontmatter.date}).</a> {node.frontmatter.excerpt}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql `
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            date(formatString: "D MMMM YYYY")
            sortDate: date
          }
          fields {
            slug
          }
        }
      }
    }
    allOtherPostsYaml {
      nodes {
        URL
        Title
        Date(formatString: "D MMM YYYY")
        sortDate: Date
        Excerpt
      }
    }
  }
`