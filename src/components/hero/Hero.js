import React from "react"
import { Jumbotron } from "react-bootstrap"
import LandingAnimation from "../LandingAnimation"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>
        Hi,
        <br /> I'm a Software developer from Sweden, living in Hangzhou, China.
      </h1>
      <div class="jumbo_animation_container">
        <LandingAnimation />
      </div>
      <br />
      <div class="jumbo_desc_container">
        <h3>
          Right now I'm working remotely using React and React Native to build
          awesome software over at Tiket.com.
        </h3>
      </div>

      <div class="jumbo_cta_container">
        <p>Have a project you'd like to discuss?</p>
        <p>
          Let's chat{" "}
          <a href="mailto:carl.igelstrom@gmail.com">
            <span style={{ color: "blueviolet" }}>
              carl.igelstrom@gmail.com
            </span>
          </a>
        </p>
      </div>
    </div>
    <div class="jumbo_social_row_container">
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
