import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import HHCMSDetailTop from "../components/hhcmsDetailTop"
import HHCMSTechnologies from "../components/hhcmsTechnologies"
import HHCMSDetailBottom from "../components/hhcmsDetailBottom"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HHCMSImageQuery {
      allImageSharp(
        filter: {
          fixed: {
            originalName: {
              in: [
                "01companySelect.png"
                "02employeeList.png"
                "03profile.png"
                "04profileMobile.png"
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
      <HHCMSDetailTop />
      <HHCMSTechnologies />
      <HHCMSDetailBottom nodes={data.allImageSharp.nodes} />
    </Layout>
  )
}

export default IndexPage
