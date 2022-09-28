import React from "react";
import { Component } from "react";
import * as Tone from "tone";

class IntervalQuiz extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      played: null,
      grade: null,
      lastQuestion: -1,
      score: 0,
      questionNumber: 0,
      quizOver: false,
      chromatic: false,
      answerKey: {
        1: "C",
        9: "C#/Db",
        2: "D",
        10: "D#/Eb",
        3: "E",
        4: "F",
        11: "F#/Gb",
        5: "G",
        12: "G#/Ab",
        6: "A",
        13: "A#/Bb",
        7: "B",
        8: "C",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.playNote = this.playNote.bind(this);
  }

  handleChange(event) {
    //reset quiz and exit
    if (event.target.id == 14) {
      this.setState((prevState) => {
        console.log("t", prevState);
        return {
          clicked: !prevState.clicked,
          questionNumber: 0,
          score: 0,
          quizOver: false,
        };
      });
    } else if (event.target.id == 18) {
      this.setState(
        (prevState) => {
          return {
            questionNumber: 0,
            score: 0,
          };
        },
        () => {
          if (this.state.clicked) {
            this.playNote();
          }
        }
      );
    } else if (event.target.id == 17) {
      this.setState((prevState) => {
        return { chromatic: !prevState.chromatic };
      });
    } else {
      //answer checking here
      if (this.state.questionNumber < 10) {
        if (event.target.id == this.state.played) {
          this.setState(
            (prevState) => {
              return {
                grade: "Correct!",
                score: prevState.score + 1,
                questionNumber: prevState.questionNumber + 1,
              };
            },
            () => {
              if (this.state.questionNumber < 10) {
                //setTimeout(()=> this.playNote(),1000)
                this.playNote();
              } else {
                this.setState({
                  grade: "Quiz over. Score " + String(this.state.score) + "/10",
                });
                setTimeout(() => this.setState({ clicked: false }), 3000);
              }
            }
          );
        } else {
          this.setState(
            (prevState) => {
              return {
                grade:
                  "Wrong, answer is " + this.state.answerKey[this.state.played],
                questionNumber: prevState.questionNumber + 1,
              };
            },
            () => {
              if (this.state.questionNumber < 10) {
                this.playNote();
                //setTimeout(()=> this.playNote(),1000)
              } else {
                this.setState({ quizOver: true });
                this.setState({
                  grade: "Quiz over. Score " + String(this.state.score) + "/10",
                });
                setTimeout(() => this.setState({ clicked: false }), 1500);
              }
            }
          );
        }
      } else {
        this.setState({ quizOver: true });
      }
    }
  }

  playNote() {
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "4n", now);

    this.setState({
      grade: null,
    });
    this.setState({
      played: null,
    });

    var maximum;
    this.state.chromatic ? (maximum = 13) : (maximum = 8);
    var minimum = 1;
    var randomNumber;
    do {
      randomNumber =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    } while (this.state.lastQuestion == randomNumber);
    this.setState(
      {
        played: randomNumber,
      },
      () => {
        //put prints in callback as set state is async
        //console.log(randomNumber,"rdm")
        console.log(this.state.answerKey[this.state.played], "ply");
        //console.log(this.state.grade,"grd")
        this.setState({ lastQuestion: this.state.randomNumber });
        if (this.state.played == 1) {
          synth.triggerAttackRelease("C4", "4n", now + 1);
        } else if (this.state.played == 9) {
          synth.triggerAttackRelease("C#4", "4n", now + 1);
        } else if (this.state.played == 2) {
          synth.triggerAttackRelease("D4", "4n", now + 1);
        } else if (this.state.played == 10) {
          synth.triggerAttackRelease("D#4", "4n", now + 1);
        } else if (this.state.played == 3) {
          synth.triggerAttackRelease("E4", "4n", now + 1);
        } else if (this.state.played == 4) {
          synth.triggerAttackRelease("F4", "4n", now + 1);
        } else if (this.state.played == 11) {
          synth.triggerAttackRelease("F#4", "4n", now + 1);
        } else if (this.state.played == 5) {
          synth.triggerAttackRelease("G4", "4n", now + 1);
        } else if (this.state.played == 12) {
          synth.triggerAttackRelease("G#4", "4n", now + 1);
        } else if (this.state.played == 6) {
          synth.triggerAttackRelease("A4", "4n", now + 1);
        } else if (this.state.played == 13) {
          synth.triggerAttackRelease("A#4", "4n", now + 1);
        } else if (this.state.played == 7) {
          synth.triggerAttackRelease("B4", "4n", now + 1);
        } else if (this.state.played == 8) {
          synth.triggerAttackRelease("C5", "4n", now + 1);
        }
      }
    );
  }
  render() {
    return (
      <div>
        <button class="quiz-button" id="14" onClick={this.handleChange}>
          {this.state.clicked ? "Quit" : "Interval Quiz"}
        </button>
        {this.state.clicked && (
          <div>
            {this.state.quizOver && (
              <div class="quiz-text">
                {" "}
                Quiz Over Score: {this.state.score}/10, click Quit to exit
              </div>
            )}
            <button class="quiz-button" id="18" onClick={this.handleChange}>
              Start Quiz
            </button>
            <button class="quiz-button" id="17" onClick={this.handleChange}>
              Chromatic
            </button>
            {!this.state.quizOver && (
              <div class="quiz-text" id="15">
                Score: {this.state.score}/10 Question #
                {1 + this.state.questionNumber}
              </div>
            )}

            {this.state.chromatic ? (
              <div>
                <button id="1" onClick={this.handleChange} class="quiz-button">
                  C
                </button>
                <button id="9" onClick={this.handleChange} class="quiz-button">
                  C#/Db
                </button>
                <button id="2" onClick={this.handleChange} class="quiz-button">
                  D
                </button>
                <button id="10" onClick={this.handleChange} class="quiz-button">
                  D#/Eb
                </button>
                <button id="3" onClick={this.handleChange} class="quiz-button">
                  E
                </button>
                <button id="4" onClick={this.handleChange} class="quiz-button">
                  F
                </button>
                <button id="11" onClick={this.handleChange} class="quiz-button">
                  F#/Gb
                </button>
                <button id="5" onClick={this.handleChange} class="quiz-button">
                  G
                </button>
                <button id="12" onClick={this.handleChange} class="quiz-button">
                  G#/Ab
                </button>
                <button id="6" onClick={this.handleChange} class="quiz-button">
                  A
                </button>
                <button id="13" onClick={this.handleChange} class="quiz-button">
                  A#/Bb
                </button>
                <button id="7" onClick={this.handleChange} class="quiz-button">
                  B
                </button>
                <button id="8" onClick={this.handleChange} class="quiz-button">
                  C
                </button>
              </div>
            ) : (
              <div>
                <button id="1" onClick={this.handleChange} class="quiz-button">
                  C
                </button>
                <button id="2" onClick={this.handleChange} class="quiz-button">
                  D
                </button>
                <button id="3" onClick={this.handleChange} class="quiz-button">
                  E
                </button>
                <button id="4" onClick={this.handleChange} class="quiz-button">
                  F
                </button>
                <button id="5" onClick={this.handleChange} class="quiz-button">
                  G
                </button>
                <button id="6" onClick={this.handleChange} class="quiz-button">
                  A
                </button>
                <button id="7" onClick={this.handleChange} class="quiz-button">
                  B
                </button>
                <button id="8" onClick={this.handleChange} class="quiz-button">
                  C
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default IntervalQuiz;
