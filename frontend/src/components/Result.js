import React from "react";

function Result(props) {
    const percentage = Math.round(100 * props.numCorrect / props.num);
    return (
        <div>
            <h3>
                You got {props.numCorrect} out of {props.num} on this Quiz! That's {percentage}% correct!
            </h3>
            <button onClick={props.resetFunc}>Retry?</button>
        </div>
    )
}
export default Result