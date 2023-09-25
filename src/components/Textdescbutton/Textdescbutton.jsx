import React from "react"
import PropTypes from "prop-types"
import "./Textdescbutton.css"
import Button from "../Button/Button"
import Tittle from "../Title/Title"

const Textdescbutton = ({ title1, title2, paragraph, textcolor }) => {
    return (
        <div className='textdescbutton'>
            <Tittle title1={title1} title2={title2} column color={textcolor}/>
            {(() => {
                if (typeof paragraph === "string") {
                    return <p className='textdescbutton__paragraph' style={{color: textcolor}}>{paragraph}</p>
                } else {
                    return paragraph.map((item, index) => 
                        <p key={index} className='textdescbutton__paragraph' style={{color: textcolor}}>{item}</p>
                    )
                }
            })()}
        </div>
    )
}

Textdescbutton.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    paragraph: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    textcolor: PropTypes.string,
    fontsize: PropTypes.string
}

export default Textdescbutton
