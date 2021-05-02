import React from 'react'
import { Parallax, Row, Col} from 'react-materialize';
import Section from "../components/Section"
import Icons from "../components/Icons"
import background1 from '../assets/images/background-1.png'
import background2 from '../assets/images/background-2.jpg'


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
                <Col s={12} m={6}>
                    
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

export default Portfolio;