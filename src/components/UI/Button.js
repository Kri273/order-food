const Button = (props) => {
    const buttonClass = props.textOnly ? 'text-button' : 'button';
    return (
        <button className={buttonClass} type={props.type ||'button'} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button