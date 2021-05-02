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