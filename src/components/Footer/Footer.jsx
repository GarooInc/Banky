import React from "react"
import "./Footer.css" // Make sure to create a Footer.css file for styles
import {FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/images/logo.png" alt="Logo" className="footer-logo" />
                <p className="footer-description">Seamless banking through Whatsapp text.</p>
                <div className="flex mb-10 mt-10">
                    <a href="#" className="footer-social">
                        <FaFacebook size={20} style={{ color: "#000" }}/>
                    </a>
                    <a href="#" className="footer-social">
                        <FaTwitter size={20} style={{ color: "#000" }}/>
                    </a>
                    <a href="#" className="footer-social">
                        <FaLinkedin size={20} style={{ color: "#000" }}/>
                    </a>
                </div>
                <p className="footer-copyright">© 2023 Garoo Inc. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
