import React, { Component } from "react";
import { render } from "react-dom";
import Question from './Question';
import Result from './Result';
import styles from '../../static/css/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [], //quizdata grabbed from backend API
      userAnswers: [],
      started: false,
      showResults: false,
      loaded: false, //while the backend data is being loaded.
      placeholder: 'loading',
    };

    //bind event handling functions
    this.start = this.start.bind(this);
    this.toggleResults = this.toggleResults.bind(this);
    this.updateCorrect = this.updateCorrect.bind(this);
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
        this.setState({
            data,
            loaded: true,
            userAnswers
          }
        );
      });
  }

  start() {
    this.setState({started: true})
  }

  toggleResults() {
      this.setState(state => ({
          showResults : !state.showResults
      }));
  }

  updateCorrect(index, answer) {
    this.setState(state => {
      state.userAnswers[index] = answer
      return {
        userAnswers: state.userAnswers
      }
    })
  }

  render() {
    const checkNumCorrect = (prev, curr, index) => {
      const isMatch = (curr === this.state.data.questions[index].correctChoice);
      if (isMatch) {
        return prev + 1;
      }
      return prev;                                                                                    
    }

    if (!this.state.loaded) {
      return <p> {this.state.placeholder} </p>
    } else if (!this.state.started) {
      return <button onClick={this.start} className={styles.StartButton}>Start Quiz here</button>;
    } 
    return (
      <div className={styles.Quiz}>
        <h1>{this.state.data.title}</h1>
        <ol>
          {this.state.data.questions.map((questionBlock, index) => 
            (
              <li key={questionBlock.question} className={styles.Question}>
                  <Question question      = {questionBlock.question} 
                            choices       = {questionBlock.choices} 
                            answer        = {questionBlock.correctChoice} 
                            updateCorrect = {this.updateCorrect}
                            index         = {index}
                            isDone        = {this.state.showResults}/>
              </li>
            )
          )}
        </ol>
        <div className={styles.Results}>
          <Result numCorrect       = {this.state.userAnswers.reduce(checkNumCorrect, 0)} 
                  num              = {this.state.data.questions.length} 
                  toggleResults    = {this.toggleResults}
                  showResults      = {this.state.showResults}/>
        </div>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
