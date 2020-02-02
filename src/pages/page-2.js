import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>I like public <Link to="/speaking">speaking</Link></p>
  </Layout>
)

export default SecondPage
