import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize';
import logo from "./logo.png"
import "./style.css"

export default function CustomNavbar() {
    return (
        <Navbar
            className="navbar"
            alignLinks="right"
            brand={<a className="brand-logo" href="#"><img src={logo}></img></a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            sidenav={
                <div className="left-align">
                    <li>
                        <div class="userView">
                        <a href="#!user"><img class="circle mobileNavPic"
                            src="https://ca.slack-edge.com/T01EK8F49FD-U01EQLMH3S6-10ba5fdbd101-512"
                            alt="User Image Sidenav"/></a>
                            <br></br><br></br>
                        <a><span class="black-text name">Paul Vatterott</span></a>
                        <br></br>
                        <a href="mailto:pfvatterott@gmail.com"><span class="black-text email">pfvatterott@gmail.com</span></a>
                        </div>
                    </li>
                <ul class="side-nav" id="mobile-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/languages">Languages and Skills</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
                </div>
            }
            >
            
            <NavItem >
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/languages">Languages and Skills</Link>
            </NavItem>
            <NavItem>
            <Link to="/portfolio">Portfolio</Link>
            </NavItem>
        </Navbar>
    )
}
