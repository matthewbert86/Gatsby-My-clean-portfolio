import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import gatsbyStarterPicture from "../images/portfolio/16by9/gatsby_starter.jpg"
import livingCalcPicture from "../images/portfolio/16by9/boendekostnad.jpg"
import imageSearchAppPicture from "../images/portfolio/16by9/image-search.jpg"
import weatherAppPicture from "../images/portfolio/16by9/weather-app.jpg"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

//Official Gatsby.js Starter

const gatsbyStarterProject = {
  title: "Official Gatsby.js Starter",
  date: "2019-04-19",
  decription:
    "After completing this portfolio site, I forked the project, changed the content to make it into a starter template and got my pull-request accepted into the offical Gatsby.js project in Github. After I also joined the official maintainers team of the project.",
  sourceURL: "https://github.com/ugglr/gatsby-clean-portfolio",
  hostedURL: "https://www.gatsbyjs.org/starters/ugglr/gatsby-clean-portfolio/",
}

//Living Cost Calculator Project

const mortgageCalculatorProject = {
  title: "React Mortgage Calculator",
  date: "2019-03-28",
  decription:
    "While I was buying my apartment in Sweden, I always made the calculations by hand because I could not find a calculator that gave the whole picture. Tools: create-react-app; Bootstrap4; Material-UI",
  sourceURL: "https://github.com/ugglr/boendekostnad-nu",
  hostedURL: "http://www.boendekostnad.nu",
}

//React Image-API search app Project

const imageSearchAppProject = {
  title: "React Search image-API App",
  date: "2019-03-03",
  decription:
    "This app uses Axios to search Pixabay API for images, and displays them in a grid below. Also uses Material-UI pre-built components for some styling.",
  sourceURL: "https://github.com/ugglr/React-Image-Search-API-app",
  hostedURL:
    "https://www.carlw.se/portfolioSites/react-image-search-app/index.html",
}

//Weather app Project

const weatherAppProject = {
  title: "React Weather-API App",
  date: "2019-02-12",
  decription:
    "This app uses async-await + fetch to grab weather data from openweathermap.org open API. Bootstrap 4 CSS classes are used for styling",
  sourceURL: "https://github.com/ugglr/react-API-weather-app",
  hostedURL: "https://www.carlw.se/portfolioSites/react-weather-app/index.html",
}

export default () => (
  <div className="App">
    <Layout>
      {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
      <MyJumbo
        title={"Projects Portfolio"}
        body={
          "I think the best way of learning is by getting down to coding and build. I really appreciate feedback on anything that I have built!"
        }
      />
      <hr />
      <Container style={{ marginTop: "2.5rem" }}>
        {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={gatsbyStarterPicture}
              title={gatsbyStarterProject.title}
              date={gatsbyStarterProject.date}
              description={gatsbyStarterProject.decription}
              sourceURL={gatsbyStarterProject.sourceURL}
              hostedURL={gatsbyStarterProject.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={livingCalcPicture}
              title={mortgageCalculatorProject.title}
              date={mortgageCalculatorProject.date}
              description={mortgageCalculatorProject.decription}
              sourceURL={mortgageCalculatorProject.sourceURL}
              hostedURL={mortgageCalculatorProject.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={imageSearchAppPicture}
              title={imageSearchAppProject.title}
              date={imageSearchAppProject.date}
              description={imageSearchAppProject.decription}
              sourceURL={imageSearchAppProject.sourceURL}
              hostedURL={imageSearchAppProject.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={weatherAppPicture}
              title={weatherAppProject.title}
              date={weatherAppProject.date}
              description={weatherAppProject.decription}
              sourceURL={weatherAppProject.sourceURL}
              hostedURL={weatherAppProject.hostedURL}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
