import React from 'react'
import { Footer } from 'react-materialize';
import "./style.css"

export default function CustomFooter() {
    return (
        <Footer
            className="footer"
            copyrights="© 2021 Copyright Paul Vatterott"
        >
            <h5 className="white-text left-align">
            Paul Vatterott
            </h5>
            <p className="grey-text text-lighten-4 left-align">
            pfvatterott@gmail.com
            </p>
            <p className="grey-text text-lighten-4 left-align">
            651-308-4855
            </p>
      </Footer>
    )
}
