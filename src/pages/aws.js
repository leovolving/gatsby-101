import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: {eq : "aws.png"}) {
      childImageSharp {
        fixed(width:800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const AWS = ({data}) => (
  <Layout>
    <SEO title="AWS" />
    <p>Enable a Cloudwatch Event rule in an AWS Lambda.</p>
    <Img fixed={data.file.childImageSharp.fixed} alt="Click 'Cloudwatch Events, Click 'Enable', Click 'Save'" />
  </Layout>
)

export default AWS
