

/**
 * A functional component that displays an error message.
 *
 * @param {object} props - The component props.
 * @param {string} props.errorMessage - The error message to display.
 * @returns {JSX.Element} A div containing the error message.
 */
const ErrorMessage = ({ errorMessage }) => {
    return (
        <div>
            <p style={{
                fontSize: '32px',
                color: 'red',
                textAlign: 'center',
                marginTop: '20px'
            }}>{errorMessage}</p>
        </div>
    )
}

export default ErrorMessage