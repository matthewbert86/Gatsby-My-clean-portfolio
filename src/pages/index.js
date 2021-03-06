import React from "react"
import Layout from "../components/layout/Layout"

import Hero from "../components/hero/Hero"
import Summary from "../components/summary/Summary"
import Projects from "../components/projects/Projects"

//Use Nike Orange later as primary color, it's dope together with white?
//#FF6600

//import bootstrap styles
import "../bootstrap/css/bootstrap.min.css"

//import my custom styles
import "./index.css"

export default () => (
  <div className="App">
    <Layout>
      <Hero />
      <hr />
      <Summary />
      <hr />
      <Projects />
      <hr />
    </Layout>
  </div>
)
