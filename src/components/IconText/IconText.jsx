import React from "react"
import PropTypes from "prop-types"
import styles from "./IconText.module.css"

const IconText = ({ icon, text }) => {
    return (
        <div className={styles.iconText}>
            {icon}
            <span className={styles.text}>{text}</span>
        </div>
    )
}

IconText.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default IconText
