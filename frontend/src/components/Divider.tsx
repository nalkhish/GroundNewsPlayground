import './Divider.css';

type DividerPropsType = {
    children: JSX.Element
}
/** A styling wrapper around a title */
function Divider({ children }: DividerPropsType) {
    return (
        <div className="divider">
            {children}
        </div>
    )
}

export default Divider