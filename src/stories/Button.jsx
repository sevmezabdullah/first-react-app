import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, onClick, textColor, isLightMode }) => {
    return (
        <button style={{ backgroundColor: isLightMode ? 'blue' : 'gray', padding: '10px', color: textColor, borderRadius: isLightMode ? '10px' : '0px' }} onClick={onClick}>{label}</button>
    )
}


Button.propTypes = {
    /**
     * Buton üzerinde görünecek label
     */
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    textColor: PropTypes.string,
    isLightMode: PropTypes.bool
}

Button.defaultProps = {
    label: "Button",
    onClick: undefined,
    isLightMode: false
}

export default Button