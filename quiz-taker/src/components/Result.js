import React from "react";
import styles from '../../static/css/results.css';

function Result(props) {
    const percentage = Math.round(100 * props.numCorrect / props.num);
    if (!props.showResults) {
        return <button onClick = {props.toggleResults} className={styles.ResultsButton}>Submit</button>
    }
    return (
        <div>
            <h3>
                You got {props.numCorrect} out of {props.num} on this Quiz! That's {percentage}% correct!
            </h3>
            <button onClick = {props.toggleResults} className={styles.ResultsButton}>Retry?</button>
        </div>
    )
}
export default Result