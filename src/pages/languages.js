import React from 'react'
import { Parallax, Row, Col} from 'react-materialize';
import Section from "../components/Section"
import Icons from "../components/Icons"
import Resume from "../components/Resume"
import background1 from '../assets/images/background-1.png'
import background2 from '../assets/images/background-2.jpg'


function Languages() {
    return (
    <div>
        <Parallax
            image={<img alt="" src={background1}/>}
            options={{
            responsiveThreshold: 0
            }}
        />
        <Section>
            <Row className="container">
                <Col s={12} m={6}>
                    <h3 class="header grey-text text-darken-3 lighten-3" data-aos="fade-right">Languages and Skills</h3>
                    <p class="grey-text text-darken-3 lighten-3" data-aos="fade-right">
                        <br/>
                        Since starting the University of Utah Web Development Program I have gone all in to hone my skills to be
                        ready for the job market. My natural curiosity paired with a strong work ethic means I am always looking to
                        improve my skills.
                        <br/><br/>
                        Through past experiences leading countless outdoors expeditions I have acquired the ability to work with and
                        manage teams of varying sizes. I naturally like to take the reins to solve problems while also feeling
                        content to step back and learn from others.
                        <br/><br/>
                        Once I earn my certificate from the University of Utah I will be joining the job search as a full-stack web
                        developer. Until then, please reach out if you'd like to talk or collaborate!
                    </p>
                </Col>
                <Col s={12} m={1}></Col>    
                <Col s={12} m={5}>
                    <Resume/>
                </Col>
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

export default Languages;