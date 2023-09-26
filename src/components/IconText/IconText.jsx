import React from "react"
import PropTypes from "prop-types"
import styles from "./IconText.module.css"

const IconText = ({ icon, text, tittle }) => {
    return (
        tittle ? (
            <div className={styles.iconText}>
                {icon}
                <span className={styles.texttittle}>{tittle}</span>
                <span className={styles.paragraph}>{text}</span>
            </div>
        ) : (
            <div className={styles.iconText}>
            {icon}
            <span className={styles.text}>{text}</span>
            </div>
        )
    )
}

IconText.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tittle: PropTypes.string
}

export default IconText
