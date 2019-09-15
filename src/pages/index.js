import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p> I'm a Denver native living and working in Washington, DC. I work on the Labs Team at <a href="https://bpimedia.com">Bully Pulpit Interactive,</a> where I'm building products at the intersection of politics, communications, data, and technology.</p>
    <h1>Social</h1>
    <p>You can find me online on <a href="https://twitter.com/joestemarie">Twitter</a> and <a href="https://www.linkedin.com/in/joestemarie/">LinkedIn</a>.</p>
    <h1>Writing</h1>
    <p>I really enjoy writing and find that it helps me focus my thinking.</p>
    <ul>
      <li><a href=""><b>Some post title.</b> (Some date).</a> With some simple two-line snippet that goes right here and would go on for only a few words to give folks a sense of what's here.</li>
      <li><a href=""><b>Some post title.</b> (Some date).</a> With some simple two-line snippet that goes right here and would go on for only a few words to give folks a sense of what's here.</li>
    </ul>
  </Layout>
)

export default IndexPage
