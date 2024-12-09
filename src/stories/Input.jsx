import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ placeholder, type, onChange, border }) => {
    return (
        <div>
            <input style={{ width: '200px', margin: '10px', padding: '10px', border: border }} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}


Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    border: PropTypes.string
}

Input.defaultProps = {
    placeholder: "Placeholder",
    type: "text",
    onChange: undefined,
    border: '1px solid black'
}

export default Input