import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {Nav, Navbar} from 'react-bootstrap'
import Img from 'gatsby-image'
import Metadata from './metadata'

import './bootstrap.min.css'
import './layout.css'


export default (props) => (
  <StaticQuery
        query={graphql` {
      logoImage: file(relativePath: { eq: "womenlogo_dark.jpg" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      bannerImage: file(relativePath: { eq: "womenbanner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `}
    render={data => ( <>
            <Metadata />
            <Navbar  className="navbar-dark  sticky-top" expand="sm" style={{backgroundColor: "#000"}}>
                <Navbar.Brand href="/"><Img className="logo"  fixed={data.logoImage.childImageSharp.fixed}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto" >
                        <Nav.Link href="/" className={(props.active==="home")?"active":""}>Home</Nav.Link>
                        <Nav.Link href="/data" className={(props.active==="explore")?"active":""}>Explore Data </Nav.Link>
                        <Nav.Link href="/resources" className={(props.active==="resources")?"active":""}>Resources  </Nav.Link>
                        <Nav.Link href="/about" className={(props.active==="about")?"active":""}> About  </Nav.Link>
                        <Nav.Link href="/contact" className={(props.active==="contact")?"active":""}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <div className={'container'}><div id='content' className={props.className}>{props.children}</div></div>
        </>
    )}
  />
)
