// Component StyleSheet
import './index.css'

export function Display(props) {
    return (
        <div className="display">
            <h2>{props.value}</h2>
        </div>
    )
}
