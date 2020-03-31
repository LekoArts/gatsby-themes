import React from "react"
import Layout from "./layout"
import Header from "./header"
import Colors from "./colors"
import Typography from "./typography"
import Footer from "./footer"
import Space from "./space"

const Template = () => (
  <Layout>
    <Header />
    <main>
      <Colors />
      <Typography />
      <Space />
    </main>
    <Footer />
  </Layout>
)

export default Template
