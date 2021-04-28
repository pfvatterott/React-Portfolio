import React from 'react'
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
                <ul class="side-nav" id="mobile-menu">
                    <li>
                        <div class="userView">
                        <a href="#!user"><img class="circle mobileNavPic"
                            src="https://ca.slack-edge.com/T01EK8F49FD-U01EQLMH3S6-10ba5fdbd101-512"
                            alt="User Image Sidenav"/></a>
                        <a href="#!name"><span class="black-text name">Paul Vatterott</span></a>
                        <a href="#!email"><span class="black-text email">pfvatterott@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#Languages">Languages and Skills</a></li>
                    <li><a href="#PortfolioMobile">Portfolio</a></li>
                </ul>
            }
            >
            
            <NavItem href="">
                Contact
            </NavItem>
            <NavItem href="">
                Languages and Skills
            </NavItem>
            <NavItem href="">
                Portfolio
            </NavItem>
        </Navbar>
    )
}
