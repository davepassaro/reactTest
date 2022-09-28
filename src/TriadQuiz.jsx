//WEIRD BUG----- IF YOU CHANGE '==' TO '===' IT DOESN'T WORK

import React from "react";
import { Component } from "react";

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
} //cited https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

class TriadQuiz extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      question: null,
      ansA: "",
      ansB: "",
      ansC: "",
      ansD: "",
      quizOver: false,
      correctAnswer: "",
      chosenAnswer: "",
      seventh: false,
      randomized: false,
      gotCorrectAnswer: false,
      score: 0,
      questionNumber: 0,
      displayScore: false,
      chords: {
        "C major": ["C", "E", "G"],
        "D minor": ["D", "F", "A"],
        "E minor": ["E", "G", "B"],
        "F major": ["F", "A", "C"],
        "G major": ["G", "B", "D"],
        "A minor": ["A", "C", "E"],
        "B diminished": ["B", "D", "F"],
        "C# major": ["C#", "F", "G#"],
        "D major": ["D", "C#", "A"],
        "C minor": ["C", "Eb", "G"],
        "C diminished": ["C", "Eb", "Gb"],
      },
      seventhChords: {
        "C major": ["C", "E", "G", "B"],
        "D minor": ["D", "G", "A", "C"],
        "E minor": ["E", "G", "B", "D"],
        "F major": ["F", "A", "C", "E"],
        "G major": ["G", "B", "D", "F"],
        "A minor": ["A", "C", "E", "G"],
        "B diminished": ["B", "D", "F", "A"],
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateQuestion = this.generateQuestion.bind(this);
    this.fillQuestions = this.fillQuestions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showScore = this.showScore.bind(this);
  }

  handleClick(event) {
    //checks for correct answers
    const { value } = event.target;
    var toCheck = "";
    //create string to check correctness
    for (var i = 0; i < this.state.correctAnswer.length; i++) {
      toCheck += this.state.correctAnswer[i];
      if (i != this.state.correctAnswer.length - 1) {
        toCheck += ",";
      }
    }
    //console.log("here2",toCheck)
    this.setState({ chosenAnswer: value }, () => {
      //console.log(toCheck,this.state.chosenAnswer)    //})

      if (toCheck == this.state.chosenAnswer) {
        this.setState(
          (prevState) => {
            return {
              gotCorrectAnswer: true,
              score: prevState.score + 1,
              questionNumber: prevState.questionNumber + 1,
              chosenAnswer: "",
            };
          },
          () => {
            //setTimeout(()=> this.generateQuestion(),1000)
            this.generateQuestion();
          }
        );
      } else {
        this.setState(
          (prevState) => {
            return {
              questionNumber: prevState.questionNumber + 1,
              chosenAnswer: "",
            };
          },
          () => {
            this.generateQuestion();
          }
        );
      }
    });
  }
  handleChange(event) {
    //console.log("evt    ",event.target.id,"    pld      ", this.state.played)

    if (event.target.id == 1) {
      //console.log(this.state.clicked,"\n")
      this.setState(
        (prevState) => {
          return {
            clicked: !prevState.clicked,
            gotCorrectAnswer: false,
            score: 0,
            questionNumber: 0,
            quizOver: false,
          };
        },
        () => {
          if (this.state.clicked == true) {
            this.generateQuestion();
          }
        }
      );
    } else if (event.target.id == 3) {
      this.setState((prevState) => {
        return {
          randomized: !prevState.randomized,
        };
      });
    } else if (event.target.id == 4) {
      this.setState((prevState) => {
        return {
          seventh: !prevState.seventh,
        };
      });
    }
  }
  fillQuestions(chords) {
    var i;
    var answers = [];
    var questionA =
      Object.keys(chords)[
        Math.floor(Math.random() * Object.keys(chords).length)
      ];
    for (i = 0; i < 3; i++) {
      answers[i] =
        chords[
          Object.keys(chords)[
            Math.floor(Math.random() * Object.keys(chords).length)
          ]
        ];
      //below - avoid duplicate answers
      //console.log(questionA ,answers[i])
      while (chords[questionA] == answers[i]) {
        //console.log(questionA ,answers[i])
        answers[i] =
          chords[
            Object.keys(chords)[
              Math.floor(Math.random() * Object.keys(chords).length)
            ]
          ];
      }
    }
    this.setState({ question: questionA });
    answers.push(chords[questionA]);
    if (this.state.randomized === true) {
      for (i = 0; i < answers.length; i++) {
        shuffle(answers[i]);
      }
    }
    this.setState({ correctAnswer: answers[3] });
    answers = shuffle(answers);
    //console.log(answers)

    return answers;
  }
  generateQuestion(event) {
    if (this.state.questionNumber < 10) {
      this.setState({ gotCorrectAnswer: false });
    } else {
      this.setState({
        gotCorrectAnswer: false,
        score: 0,
        questionNumber: 0,
        quizOver: false,
        clicked: false,
      });
      setTimeout(
        () =>
          this.setState({
            gotCorrectAnswer: false,
            score: 0,
            questionNumber: 0,
            quizOver: false,
          }),
        3000
      );
    }

    var answers = [];
    if (this.state.seventh == false) {
      answers = this.fillQuestions(this.state.chords);
    } else {
      answers = this.fillQuestions(this.state.seventhChords);
    }
    this.setState(
      (prevState) => {
        return {
          //question : questionA,
          ansA: answers[3],
          ansB: answers[0],
          ansC: answers[1],
          ansD: answers[2],
        };
      },
      () => {
        // console.log(this.state,"qstion")
      }
    );
  }
  showScore() {}
  render() {
    return (
      <div>
        <button id="1" className="quiz-button" onClick={this.handleChange}>
          {this.state.clicked ? "Quit" : "Triad Quiz"}
        </button>
        {this.state.clicked && (
          <div>
            {this.state.quizOver && (
              <div className="quiz-text">
                {" "}
                Quiz Over Score: {this.state.score}/10, click Quit to exit
              </div>
            )}
            {!this.state.quizOver && (
              <div className="quiz-text">
                Score: {this.state.score}/10 -- Question #
                {1 + this.state.questionNumber}{" "}
              </div>
            )}
            <button id="3" className="quiz-button" onClick={this.handleChange}>
              Randomize Note Spelling{" "}
              {this.state.randomized ? "    (On)" : "    (Off)"}
            </button>
            <button className="quiz-button" id="4" onClick={this.handleChange}>
              Seventh Chords{this.state.seventh ? "    (On)" : "    (Off)"}
            </button>
            <div className="quiz-text">
              Which of the following notes compose {this.state.question}
            </div>
            {!this.state.gotCorrectAnswer && (
              <div>
                <form>
                  <br />
                  <label className="quiz-text-radio">
                    <input
                      className="quiz-radio-item"
                      id="6"
                      type="radio"
                      name="chosenAnswer"
                      value={this.state.ansA}
                      checked={this.state.chosenAnswer == this.state.ansA}
                      onChange={this.handleClick}
                    />{" "}
                    {this.state.ansA}
                  </label>
                  <br />
                  <label className="quiz-text-radio">
                    <input
                      id="7"
                      className="quiz-radio-item"
                      type="radio"
                      name="chosenAnswer"
                      value={this.state.ansB}
                      checked={this.state.chosenAnswer == this.state.ansB}
                      onChange={this.handleClick}
                    />{" "}
                    {this.state.ansB}
                  </label>
                  <br />
                  <label className="quiz-text-radio">
                    <input
                      id="8"
                      type="radio"
                      className="quiz-radio-item"
                      name="chosenAnswer"
                      value={this.state.ansC}
                      checked={this.state.chosenAnswer == this.state.ansC}
                      onChange={this.handleClick}
                    />{" "}
                    {this.state.ansC}
                  </label>
                  <br />
                  <label className="quiz-text-radio">
                    <input
                      id="9"
                      type="radio"
                      className="quiz-radio-item"
                      name="chosenAnswer"
                      value={this.state.ansD}
                      checked={this.state.chosenAnswer == this.state.ansD}
                      onChange={this.handleClick}
                    />{" "}
                    {this.state.ansD}
                  </label>
                  <br />
                </form>
              </div>
            )}
            {this.state.gotCorrectAnswer && <header id="5">CORRECT</header>}
          </div>
        )}
      </div>
    );
  }
}
export default TriadQuiz;
