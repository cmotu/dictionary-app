import React from "react";
// import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>
          Synonyms:{" "}
          {props.meaning.synonyms.map(function (synonyms, index) {
            return <span key={index}> {synonyms} </span>;
          })}
        </strong>
      </p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {/* <Synonyms synonyms={definition.synonyms} /> */}
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>

            <p>
              <strong>Example: </strong>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
