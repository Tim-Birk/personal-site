import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/heroSection"
import HeroFooter from "../components/heroFooter"
import HelloSection from "../components/helloSection"
import SkillsSection from "../components/skillsSection"
import RecentWorkSection from "../components/recentWorkSection"
import CollaborationSection from "../components/collaborationSection"
import ContactSection from "../components/contactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <HeroFooter />
    <HelloSection />
    <SkillsSection />
    <RecentWorkSection />
    <CollaborationSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
