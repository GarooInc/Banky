import React from "react"
import styles from "./Input.module.css"
import PropTypes from "prop-types"

const Input = ({ type, placeholder, className, onChange, value }) => {
    return (
        <div className={styles.inputContainer}>
            <span className={styles.input}>{placeholder}</span>
            <input type={type} placeholder={placeholder} className={className} value={value} required onChange={onChange} />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Input