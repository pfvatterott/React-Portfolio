import React from 'react'
import { Parallax, Row, Col} from 'react-materialize';
import Section from "../components/Section"
import ProfilePic from "../components/ProfilePic"
import Name from "../components/Name"
import Icons from "../components/Icons"
import background1 from '../assets/images/background-1.png'
import background2 from '../assets/images/background-2.jpg'


function Home() {
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
            <Col s={12} m={6} className="center-align">
                <ProfilePic />
            </Col>
            <Col s={12} m={6}>
                <Name/>
                <Icons href="https://github.com/pfvatterott" iconName="fab fa-github tooltipped contact-icons"/>
                <Icons href="https://www.linkedin.com/in/paul-vatterott/" iconName="fab fa-linkedin-in tooltipped contact-icons"/>
                <Icons href="https://www.instagram.com/pppaaaauuuullllll/" iconName="fab fa-instagram tooltipped contact-icons"/>
                <Icons href="https://www.facebook.com/paul.vatterott/" iconName="fab fa-facebook tooltipped contact-icons"/>
                <Icons href="mailto:pfvatterott@gmail.com" iconName="far fa-envelope tooltipped contact-icons"/>
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

export default Home;