import React from 'react'
import "./style.css"

export default function ProjectCard(props) {
    return (
        <div>
            <div class={props.className} data-aos="fade-right">
            <a href={props.linkToProject} target="_blank"><img class="responsive-img best-snow"
                data-aos="fade-right" src={props.image} alt="screenshot of weather dashboard"
                height="500" /></a>
          </div>
        </div>
    )
}
