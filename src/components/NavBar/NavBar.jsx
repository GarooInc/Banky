import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import "./NavBar.css"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src="/images/logo.png" alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: "#ffffff" }} />)
                        : (<FaBars size={30} style={{ color: "#ffffff" }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="features" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Features</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="network" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Network</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="demo" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Demo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar