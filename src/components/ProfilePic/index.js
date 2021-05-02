import React from 'react'
import profilePic from "./profile-picture.jpg"
import "./style.css"

export default function ProfilePic() {
    return (
        <div>
            <br></br>
            <img class="circle main-profile-pic z-depth-3 hoverable scrollspy" id="Contact"
                src={profilePic} alt="Paul Vatterott profile picture"/>
            <br></br>
        </div>
    )
}
