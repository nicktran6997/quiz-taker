import React, {Component} from 'react';

// {props.choices.forEach(choice => (<li>{choice}</li>))}
const quizStyle = {border: "1px solid white", borderRadius: "10px"}
const highlightCorrect = {backgroundColor: "#fff2ac", backgroundImage: "linear-gradient(to right, #ffe359 0%, #fff2ac 100%)"}
function Option(props) {
    const currStyle = (props.isDone && props.index === props.answer) ? highlightCorrect : {}
    return (
    <li key={props.question}>
        <input type="radio" value={props.index} id={props.choice} name={props.question} disabled = {props.isDone}/>
        <label htmlFor={props.choice} style={currStyle}>
            {props.choice}
        </label>
    </li>
    )
}

class Question extends Component {
    constructor(props) {
        super(props)
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        this.props.updateCorrect(this.props.index, parseInt(event.target.value))
    }

    render() {
        return (
            <div style={quizStyle}>
                <h3>{this.props.question}</h3>
                <ul className="choices" style={{listStyleType:"none"}} onChange={this.onChangeValue}>
                    {this.props.choices.map((choice, i) => {
                        return <Option choice={choice} 
                                        question={this.props.question} 
                                        index = {i} 
                                        answer = {this.props.answer} 
                                        isDone = {this.props.isDone}/>
                    })}
                </ul>
            </div>)
    }
}

export default Question;

// function updateAnswer(updateCorrect, index,event) {
//     updateCorrect()
// }
// function Question(props) {
    
//     return (
//     <div style={quizStyle}>
//         <h3>{props.question}</h3>
//         <ul className="choices" style={{listStyleType:"none"}} onChange={props.updateCorrect(props.index, parseInt(event.target.value))}>
//             {props.choices.map((choice, i) => {
//                 return <Option choice={choice} 
//                 question={props.question} 
//                 index = {i} answer = {props.answer} 
//                 isDone = {props.isDone}/>
//             })}
//         </ul>
//     </div>)
// }

