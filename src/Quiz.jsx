import React from "react";
import TriadQuiz from "./TriadQuiz";
import IntervalQuiz from "./IntervalQuiz";
import FretBoard from "./FretBoard";

export default function Quiz() {
  return (
    <div className="text-center homeImg">
      <br />
      <TriadQuiz />
      <br />
      <IntervalQuiz />
      <br />
      <FretBoard />
    </div>
  );
}
