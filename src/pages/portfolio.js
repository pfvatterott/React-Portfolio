import React from 'react'
import { Parallax, Row, Col} from 'react-materialize';
import ProjectCard from "../components/ProjectCard"
import ProjectSection from "../components/ProjectSection"
import MobileProjectSection from "../components/MobileProjectSection"
import Line from "../components/Line"
import GithubButton from "../components/GithubButton"
import Icons from "../components/Icons"
import background1 from '../assets/images/background-1.png'
import background2 from '../assets/images/background-2.jpg'
import bestSnowScreenshot from "../assets/images/bestsnowscreenshot.png"
import employeeDirectoryScreenshot from "../assets/images/employeeDirectory.png"
import teamGeneratorScreenshot from "../assets/images/teamgeneratornew.png"
import workoutTrackerScreenshot from "../assets/images/workoutTracker-screenshot.png"
import noteTakerScreenshot from "../assets/images/noteTaker-screenshot.png"
import ndevrScreenshot from "../assets/images/ndevrscreenshot.png"



function Portfolio() {
    return (
    <div>
        <Parallax
            image={<img alt="" src={background1}/>}
            options={{
            responsiveThreshold: 0
            }}
        />
        <ProjectSection>
            <h2 class="center-align" data-aos="fade-down">My Projects</h2>
            <br></br><br></br>
            {/* First Card */}
            <Row className="container">
                <Col s={12} m={5}>
                    <ProjectCard image={bestSnowScreenshot} linkToProject={"https://pfvatterott.github.io/BestSnow/"} className={"best-snow-border card-panel center-align z-depth-5 hoverable"}/>
                </Col>
                <Col s={12} m={1}></Col>
                <Col s={12} m={1}>
                    <br></br><br></br>
                    <Line/>
                </Col>
                <Col s={12} m={5}>
                    <h3 class="header grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">Best Snow</h3>
                    <p class="grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">
                        <br></br>
                        Best Snow is a website that shows winter sport enthusiasts how the current snow pack compares to previous
                        winter seasons in hundreds of locations across the Western United States.
                    </p>
                    <p class="grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">
                        This project was created by a team of four members. My main role was connecting to and communicating with an
                        API, organizing and interpreting data, and building the Map UI and graphs.
                        <br></br><br></br><br></br>
                    </p>
                    <GithubButton githubLink={"https://github.com/pfvatterott/BestSnow"} className={"text-section waves-effect waves-light btn-large github-button z-depth-3 hoverable left-align"}/>
                </Col>
            </Row>
            <br></br><br></br>
            {/* Second Card */}
            <Row className="container">
                <Col s={12} m={5}>
                    <br></br>
                    <h3 class="header grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">Employee Directory</h3>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">
                        <br></br>
                        My first React Website! Employee Directory is an application that helps a manager keep track of their employees.
                        They can navigate through a paginated list, search, or sort through it. They can also see more information by a 
                        popup Modal.
                    </p>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">
                        <br></br>
                        This application is centered around ReactJS but also uses MaterializeCSS, React-Materialize, and Axios. 
                    </p>
                    <br></br>
                    <GithubButton githubLink={"https://github.com/pfvatterott/Employee-Directory"} className={"text-section waves-effect waves-light btn-large github-button-middle z-depth-3 hoverable left-align"}/>
                </Col>
                <Col s={12} m={1}>
                    <br></br><br></br>
                    <Line/>
                </Col>
                <Col s={12} m={1}></Col>
                <Col s={12} m={5}>
                    <ProjectCard image={employeeDirectoryScreenshot} linkToProject={"http://paul-vatterott.com/Employee-Directory"} className={"directory-border card-panel center-align z-depth-5 hoverable"}/>
                </Col>
            </Row>
            <br></br><br></br>
            {/* Third Card */}
            <Row className="container">
                <Col s={12} m={5}>
                    <ProjectCard image={ndevrScreenshot} linkToProject={"https://ndevr.herokuapp.com/"} className={"ndevr-border card-panel center-align z-depth-5 hoverable"}/>
                </Col>
                <Col s={12} m={1}></Col>
                <Col s={12} m={1}>
                    <br></br><br></br>
                    <Line/>
                </Col>
                <Col s={12} m={5}>
                    <h3 class="header grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">N-DEVR</h3>
                    <p class="grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">
                        <br></br>
                        N-DEVR is a Strava companion app that aims to help adventure seekers plan out their outdoor activities & endeavors. Our team's mission is to easily allow our active outdoor community to plan, organize, and include friends in outdoor pursuits and goals.
                    </p>
                    <p class="grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">
                        <br></br>
                        This project was created by a team of two. My main role was backend, database communication, setting up communication with Strava, and creating the map UI.
                        <br></br><br></br>
                    </p>
                    <GithubButton githubLink={"https://github.com/pfvatterott/N-DEVR"} className={"text-section waves-effect waves-light btn-large github-button z-depth-3 hoverable left-align"}/>
                </Col>
            </Row>
            <br></br><br></br>
            {/* Fourth Card */}
            <Row className="container">
                <Col s={12} m={5}>
                    <br></br>
                    <h3 class="header grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">Team Profile Generator</h3>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">
                        <br></br>
                        Team Profile Generator is a command line application that helps a manager keep track of their team. The application prompts the user about details for each member and then dynamically makes a webpage that displays all team data.
                    </p>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">
                        <br></br>
                        This application was made to get familiar with NodeJS. It also uses Inquirer NPM, Jest, and MaterializeCSS.
                    </p>
                    <br></br>
                    <GithubButton githubLink={"https://github.com/pfvatterott/Team-Profile-Generator"} className={"text-section waves-effect waves-light btn-large github-button-middle z-depth-3 hoverable left-align"}/>
                </Col>
                <Col s={12} m={1}>
                    <br></br><br></br>
                    <Line/>
                </Col>
                <Col s={12} m={1}></Col>
                <Col s={12} m={5}>
                    <ProjectCard image={teamGeneratorScreenshot} linkToProject={"https://github.com/pfvatterott/Team-Profile-Generator"} className={"teamProfileGenerator-border card-panel center-align z-depth-5 hoverable"}/>
                </Col>
            </Row>

            <br></br><br></br>
            {/* Fifth Card */}
            <Row className="container">
                <Col s={12} m={5}>
                    <ProjectCard image={workoutTrackerScreenshot} linkToProject={"https://enigmatic-cliffs-12933.herokuapp.com/"} className={"workoutTracker-border card-panel center-align z-depth-5 hoverable"}/>
                </Col>
                <Col s={12} m={1}></Col>
                <Col s={12} m={1}>
                    <br></br><br></br>
                    <Line/>
                </Col>
                <Col s={12} m={5}>
                    <h3 class="header grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">Workout Tracker</h3>
                    <p class="grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">
                        <br></br>
                        Workout Tracker allows a user to input either a strength or cardio workout and then add detail to is such as name, weights, sets, duration, reps, or distance. Then the user
                        can look at their progress on the dashboard menu. 
                    </p>
                    <p class="grey-text text-darken-3 lighten-3 text-section left-align" data-aos="fade-left">
                        <br></br>
                        This project was built to get familiar with MongoDB and MongooseJS. I also used Express for the backend.
                        <br></br><br></br>
                    </p>
                    <GithubButton githubLink={"https://github.com/pfvatterott/Workout-Tracker"} className={"text-section waves-effect waves-light btn-large github-button z-depth-3 hoverable left-align"}/>
                </Col>
            </Row>

            <br></br><br></br>
            {/* Sixth Card */}
            <Row className="container">
                <Col s={12} m={5}>
                    <br></br>
                    <h3 class="header grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">Note Taker</h3>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">
                        <br></br>
                        Note Taker allows the user to take notes! The user can write new notes, edit old ones, and delete ones they don't need anymore.
                    </p>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-right">
                        <br></br>
                        Note Taker was created to use a database for the first time. This program uses several NPM packages including Unique-Identifier to create unique IDs and express to handle all web frameworks.
                    </p>
                    <br></br>
                    <GithubButton githubLink={"https://github.com/pfvatterott/Note-Taker"} className={"text-section waves-effect waves-light btn-large github-button-middle z-depth-3 hoverable left-align"}/>
                </Col>
                <Col s={12} m={1}>
                    <br></br><br></br>
                    <Line/>
                </Col>
                <Col s={12} m={1}></Col>
                <Col s={12} m={5}>
                    <ProjectCard image={noteTakerScreenshot} linkToProject={"https://pfvatterott-note-taker.herokuapp.com/"} className={"noteTaker-border card-panel center-align z-depth-5 hoverable"}/>
                </Col>
            </Row>

           
        </ProjectSection>

        {/* Mobile Cards */}
        <MobileProjectSection>
            <Row className="container">
                <Col s={12}>
                    <h2 class="center-align" data-aos="fade-down">My Projects</h2>
                    <br></br><br></br>
                </Col>
                <Col s={12} m={5}>
                    <div class="card-panel center-align best-snow-border-small z-depth-5 hoverable" data-aos="fade-right">
                        <a href="https://pfvatterott.github.io/BestSnow/" target="_blank"><img
                            class="responsive-img best-snow-small" data-aos="fade-right" src={bestSnowScreenshot}
                            alt="screenshot of weather dashboard" />
                        </a>
                     </div> 
                </Col>
                <Col s={12} m={5}>
                    <h3 class="header grey-text text-darken-3 lighten-3 left-align" data-aos="fade-left">Best Snow</h3>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-left">
                        <br></br>
                        Best Snow is a website that shows winter sport enthusiasts how the current snow pack compares to previous
                        winter seasons in hundreds of locations across the Western United States.
                        <br></br><br></br>
                        This project was created by a team of four members. My main role was connecting to and communicating with an
                        API, organizing and interpreting data, and building the Map UI and graphs.
                    </p>
                    <br></br>
                    <GithubButton githubLink={"https://github.com/pfvatterott/BestSnow"} className={"text-section waves-effect waves-light btn-large github-button-middle z-depth-3 hoverable left-align"}/>
                </Col>
            </Row>

            {/* Line */}
            <Row className="container">
                <Col s={12} m={5}>
                    <div class="line1-mobile" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000"></div>
                </Col>
            </Row>
            <br></br>

            {/* Second Card */}
            <Row className="container">
                 <Col s={12} m={5}>
                    <div class="card-panel center-align note-border-small z-depth-5 hoverable" data-aos="fade-right">
                        <a href="https://ndevr.herokuapp.com/" target="_blank"><img
                            class="responsive-img best-snow-small" data-aos="fade-right" src={ndevrScreenshot}
                            alt="screenshot of weather dashboard" />
                        </a>
                     </div> 
                </Col>
                <Col s={12} m={5}>
                    <h3 class="header grey-text text-darken-3 lighten-3 left-align" data-aos="fade-left">N-DEVR</h3>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-left">
                        <br></br>
                        N-DEVR is a Strava companion app that aims to help adventure seekers plan out their outdoor activities & endeavors. Our team's mission is to easily allow our active outdoor community to plan, organize, and include friends in outdoor pursuits and goals.
                        <br></br><br></br>
                        This project was created by a team of two. My main role was backend, database communication, setting up communication with Strava, and creating the map UI.
                    </p>
                    <br></br>
                    <GithubButton githubLink={"https://github.com/pfvatterott/N-DEVR"} className={"text-section waves-effect waves-light btn-large github-button-middle z-depth-3 hoverable left-align"}/>
                </Col>
            </Row>

             {/* Line */}
            <Row className="container">
                <Col s={12} m={5}>
                    <div class="line1-mobile" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000"></div>
                </Col>
            </Row>
            <br></br>

            {/* Third Card */}
            <Row className="container">
                 <Col s={12} m={5}>
                    <div class="card-panel center-align team-border-small z-depth-5 hoverable" data-aos="fade-right">
                        <a href="http://paul-vatterott.com/Employee-Directory/" target="_blank"><img
                            class="responsive-img best-snow-small" data-aos="fade-right" src={employeeDirectoryScreenshot}
                            alt="screenshot of weather dashboard" />
                        </a>
                     </div> 
                </Col>
                <Col s={12} m={5}>
                    <h3 class="header grey-text text-darken-3 lighten-3 left-align" data-aos="fade-left">Employee Directory</h3>
                    <p class="grey-text text-darken-3 lighten-3 left-align" data-aos="fade-left">
                        <br></br>
                        My first React Website! Employee Directory is an application that helps a manager keep track of their employees.
                        They can navigate through a paginated list, search, or sort through it. They can also see more information by a 
                        popup Modal.
                        <br></br><br></br>
                        This application is centered around ReactJS but also uses MaterializeCSS, React-Materialize, and Axios.
                    </p>
                    <br></br>
                    <GithubButton githubLink={"https://github.com/pfvatterott/Employee-Directory"} className={"text-section waves-effect waves-light btn-large github-button-middle z-depth-3 hoverable left-align"}/>
                </Col>
            </Row>
        </MobileProjectSection>
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