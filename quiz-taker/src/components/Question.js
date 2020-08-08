import React, {Component} from 'react';
import styles from '../../static/css/app.css';

// const quizStyle = {border: "1px solid white", borderRadius: "10px"}
const highlightCorrect = {backgroundColor: "#fff2ac", backgroundImage: "linear-gradient(to right, #ffe359 0%, #fff2ac 100%)"}

function Option(props) {
    const currStyle = (props.isDone && props.index === props.answer) ? highlightCorrect : {}
    return (
    <li>
        <input type="radio" value={props.index} id={props.index + "." + props.choice} name={props.question} disabled = {props.isDone}/>
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
            <div className={styles.QuestionBlock}>
                <p>{this.props.question}</p>
                <ul className={styles.Choice} style={{listStyleType:"none"}} onChange={this.onChangeValue}>
                    {this.props.choices.map((choice, i) => {
                        return <Option choice       = {choice} 
                                        question    = {this.props.question} 
                                        index       = {i} 
                                        key         = {i + "." + choice}
                                        answer      = {this.props.answer} 
                                        isDone      = {this.props.isDone}/>
                    })}
                </ul>
            </div>)
    }
}

export default Question;