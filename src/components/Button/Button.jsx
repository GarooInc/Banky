import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

const Button = ({ text , backgroundcolor,colortext, handleClick }) => {

    return (
        <button className='btn' onClick={handleClick} style={{ backgroundColor: backgroundcolor,  color: colortext }}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    whatsapp: PropTypes.bool,
    backgroundcolor: PropTypes.string,
    colortext: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button
