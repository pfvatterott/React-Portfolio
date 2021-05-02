import React from 'react'
import "./style.css"

export default function ProjectCard(props) {
    return (
        <div>
            <div class="card-panel center-align best-snow-border z-depth-5 hoverable" data-aos="fade-right">
            <a href="https://pfvatterott.github.io/BestSnow/" target="_blank"><img class="responsive-img best-snow"
                data-aos="fade-right" src={props.image} alt="screenshot of weather dashboard"
                height="500" /></a>
          </div>
        </div>
    )
}
