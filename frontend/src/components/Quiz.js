import React, { Component } from "react";
import Question from './Question';
import Result from './Result';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userAnswers: [],
      loaded: false,
      placeholder: "Loading",
      showResults : false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateCorrect = this.updateCorrect.bind(this);
    this.reset = this.reset.bind(this);

  }

  componentDidMount() {
    fetch("quiz/Trails-in-the-Sky-Quiz")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        const userAnswers = [].fill(null, 0, data.questions.length)
        this.setState(() => {
          return {
            data,
            loaded: true,
            userAnswers
          };
        });
      });
  }

  handleClick() {
      this.setState(state => ({
          showResults : !state.showResults
      }));
  }

  updateCorrect(index, answer) {
    this.setState(state => {
      const newAnswers = state.userAnswers
      newAnswers[index] = answer
      return {
        userAnswers: newAnswers
      }
    })
  }
  reset() {
    this.setState(state => ({
      userAnswers: [].fill(null, 0, state.data.questions.length),
      showResults: false,
    }))
  }

  render() {
    const isQuizDone = true;
    const checkNumCorrect = (prev, curr, index) => {
      const isMatch = (curr === this.state.data.questions[index].correctChoice);
      if (isMatch) {
        return prev + 1;
      }
      return prev;                                                                                    
    }
    return this.state.loaded ? (
    <div>
        {/* <h1>{this.state.data.title}</h1> */}
        <h1>Hello World</h1>
      <ol>
        {this.state.data.questions.map((questionBlock, index) => {
          return (
            <li key={questionBlock.question}>
                <Question question = {questionBlock.question} 
                          choices = {questionBlock.choices} 
                          answer = {questionBlock.correctChoice} 
                          updateCorrect = {this.updateCorrect}
                          index = {index}
                          isDone = {this.state.showResults}/>
            </li>
          );
        })}
      </ol>
      
    {this.state.showResults ? <Result numCorrect = {this.state.userAnswers.reduce(checkNumCorrect, 0)} 
                                      num = {this.state.data.questions.length}
                                      resetFunc = {this.reset}/> 
                            : <button onClick={this.handleClick}>Submit</button>}
    </div>
    ) : <p> {this.state.placeholder}</p>;
  }
}

export default Quiz;
