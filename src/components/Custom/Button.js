import PropTypes from 'prop-types'

function Button(props) {
    const { onClick, className, IconClassName } = props;
    return (
        <button onClick={() => { onClick() }} className={className}><i className={IconClassName}></i></button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    IconClassName: PropTypes.string
}

export default Button;