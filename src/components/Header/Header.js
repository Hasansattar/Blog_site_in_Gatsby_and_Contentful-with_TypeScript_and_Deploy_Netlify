import React from 'react'
import './header.css'
import { Nav, Navbar } from "react-bootstrap";
import { animateScroll as scroll, Link } from "react-scroll";

export default function Header() {
    return (
        <div>
            <Navbar
      collapseOnSelect
      className="header-container"
      expand="md"
      bg="none"
      variant="dark"
    >
      <Navbar.Brand className="px-5 logo" onClick={() => scroll.scrollToTop()}>
         
        Blogs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end px-5"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Link
            activeClass="active"
            className="anchor"
            to="home-section"
            spy={true}
            smooth={true}
            delay={100}
            offset={-200}
            duration={500}
          >
            Home
          </Link>
           
          <Link
            activeClass="active"
            className="anchor"
            to="category-section"
            spy={true}
            smooth={true}
            delay={100}
            offset={-200}
            duration={500}
          >
            Category
          </Link>
          <Link
            activeClass="active"
            className="anchor"
            to="footer-section"
            spy={true}
            smooth={true}
            delay={100}
            offset={-200}
            duration={500}
          >
            Popular Post
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
            
        </div>
    )
}
