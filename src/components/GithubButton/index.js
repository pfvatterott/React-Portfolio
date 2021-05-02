import React from 'react'
import "./style.css"

export default function GithubButton(props) {
    return (
        <div>
            <a href={props.githubLink} target="_blank" download
            class="text-section waves-effect waves-light btn-large github-button z-depth-3 hoverable"
            data-aos="fade-left"><i class="fab fa-github left"></i>Github</a>
        </div>
    )
}
