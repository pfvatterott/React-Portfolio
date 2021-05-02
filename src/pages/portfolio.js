import React from 'react'
import { Parallax, Row, Col} from 'react-materialize';
import ProjectCard from "../components/ProjectCard"
import Section from "../components/Section"
import Line from "../components/Line"
import GithubButton from "../components/GithubButton"
import Icons from "../components/Icons"
import background1 from '../assets/images/background-1.png'
import background2 from '../assets/images/background-2.jpg'
import bestSnowScreenshot from "../assets/images/bestsnowscreenshot.png"



function Portfolio() {
    return (
    <div>
        <Parallax
            image={<img alt="" src={background1}/>}
            options={{
            responsiveThreshold: 0
            }}
        />
        <Section>
            <h2 class="center-align" data-aos="fade-down">My Projects</h2>
            <br></br><br></br>
            <Row className="container">
                <Col s={12} m={5}>
                    <ProjectCard image={bestSnowScreenshot}/>
                </Col>
                <Col s={12} m={1}></Col>
                <Col s={12} m={1}>
                    <br></br><br></br>
                    <Line/>
                </Col>
                <Col s={12} m={5}>
                    <h3 class="header grey-text text-darken-3 lighten-3 text-section" data-aos="fade-left">Best Snow</h3>
                    <p class="grey-text text-darken-3 lighten-3 text-section" data-aos="fade-left">
                        <br></br>
                        Best Snow is a website that shows winter sport enthusiasts how the current snow pack compares to previous
                        winter seasons in hundreds of locations across the Western United States.
                    </p>
                    <p class="grey-text text-darken-3 lighten-3 text-section" data-aos="fade-left">
                        <br></br>
                        This project was created by a team of four members. My main role was connecting to and communicating with an
                        API, organizing and interpreting data, and building the Map UI and graphs.
                    </p>
                    <br></br>
                    <GithubButton githubLink={"https://github.com/pfvatterott/BestSnow"}/>
                </Col>
                <br></br>
            </Row>
        </Section>
        <Parallax
            image={<img alt="" src={background2}/>}
            options={{
            responsiveThreshold: 0
            }}
        />
    </div>
    )
}

export default Portfolio;