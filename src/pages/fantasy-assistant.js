import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import FantasyAssistantTop from "../components/fantasyAssistantTop"
import FantasyAssistantTechnologies from "../components/fantasyAssistantTechnologies"
import FantasyAssistantBottom from "../components/fantasyAssistantBottom"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query FAImageQuery {
      allImageSharp(
        filter: {
          fixed: {
            originalName: {
              in: [
                "03cheatSheet.png"
                "02playersMobile.png"
                "01players.png"
                "04cheatSheetMobile.png"
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
      <FantasyAssistantTop />
      <FantasyAssistantTechnologies />
      <FantasyAssistantBottom nodes={data.allImageSharp.nodes} />
    </Layout>
  )
}

export default IndexPage
