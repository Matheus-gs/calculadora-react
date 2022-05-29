// Component StyleSheet
import './index.css'

export function Button(props) {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            className={classes}
            onClick={(e) => props.click && props.click(props.label)}
        >
            <b>{props.label}</b>
        </button>
    )
}
