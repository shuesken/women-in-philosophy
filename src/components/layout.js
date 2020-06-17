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
      logoImage: file(relativePath: { eq: "womenlogo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
            <Navbar  className="navbar-dark" expand="sm" style={{backgroundColor: "#000"}}>
                <Navbar.Brand href="/"><Img className="logo"  fluid={data.logoImage.childImageSharp.fluid}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto" >
                        <Nav.Link href="/" className={(props.active==="about")?"active":""}>Home</Nav.Link>
                        <Nav.Link href="/resources" className={(props.active==="cv")?"active":""}>Resources  </Nav.Link>
                        <Nav.Link href="/about" className={(props.active==="news")?"active":""}> About  </Nav.Link>
                        <Nav.Link href="/contact" className={(props.active==="projects")?"active":""}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Img className="banner"  fluid={data.bannerImage.childImageSharp.fluid}/>
            <div className={'container'}><div id='content' className={props.className}>{props.children}</div></div>
        </>
    )}
  />
)
