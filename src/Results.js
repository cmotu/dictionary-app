import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
  return (
    <div className="Results">
      <section>
        <h1>{props.results.word}</h1>
        {props.results.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
      </section>
      {props.results.meanings.map(function(meanings, index) {
        return (
          <section key={index}>
            <Meanings meaning={meanings}/>
          </section>
        )
      })}
    </div>
  );
  } else {
    return null;
  }
}