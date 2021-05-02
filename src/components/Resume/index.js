import React from 'react'
import "./style.css"
import { MediaBox } from 'react-materialize';
import resume from "../../assets/images/resume-screenshot.png"
import resumeDownload from "../../assets/images/resume.pdf"

export default function Resume() {
    return (
        <div>
            
            <MediaBox
                id="resume"
                className="z-depth-3 hoverable"
                options={{
                    inDuration: 275,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200
                }}
                >
                <img
                    alt=""
                    src={resume}
                />
            </MediaBox>

            <a href={resumeDownload} download class="waves-effect waves-light btn-large download-button"
            data-aos="fade-left"><i class="material-icons left">download</i>pdf resume</a>
        </div>
    )
}
