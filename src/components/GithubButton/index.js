import React from 'react'
import "./style.css"

export default function GithubButton(props) {
    return (
        <div>
            <a href={props.githubLink} target="_blank" download
            className={props.className}
            data-aos="fade-left"><i class="fab fa-github left"></i>Github</a>
        </div>
    )
}
