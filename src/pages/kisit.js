import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import KisitDetailTop from "../components/kisitDetailTop"
import KisitTechnologies from "../components/kisitTechnologies"
import KisitDetailBottom from "../components/kisitDetailBottom"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query KisitImageQuery {
      allImageSharp(
        filter: {
          fixed: {
            originalName: {
              in: [
                "04agingReport.png"
                "02billingCenter.png"
                "03schedulingCenter.png"
                "05cashCollections.png"
              ]
            }
          }
        }
        sort: { fields: fixed___originalName }
      ) {
        nodes {
          fluid(maxWidth: 1000) {
            originalName
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <KisitDetailTop />
      <KisitTechnologies />
      <KisitDetailBottom nodes={data.allImageSharp.nodes} />
    </Layout>
  )
}

export default IndexPage
