import React from 'react'
import "./style.css"
import line from "../../assets/images/Vertical-Line.png"

export default function Line() {
    return (
        <div>
             <img class="responsive-img line" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000"
            src={line} alt="screenshot of weather dashboard" />
        </div>
    )
}
