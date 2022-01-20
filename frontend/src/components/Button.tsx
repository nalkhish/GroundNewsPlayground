import './Button.css';

type ButtonPropsType = {
    handleClick: Function,
    children: any,
    className?: string
}

/** Generic button */
function Button({
        handleClick,
        children,
        className = "btn"
    }: ButtonPropsType) {

    return (
        <button
            onClick={(...args) => handleClick(...args)}
            className={className}
        >
            {children}
        </button>
    )
}

export default Button