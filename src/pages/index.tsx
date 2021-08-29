import * as React from "react"
import Layout from "../components/layout/layout"
import ButtonComponent from "../components/buttons/ButtonComponent"
import HeroSection from "../components/sections/HeroSection"
const IndexPage = () => (
  <>
    <Layout>
      <HeroSection />
      <ButtonComponent />
    </Layout>
  </>
)

export default IndexPage
