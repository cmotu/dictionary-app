import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return ( 
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function(definitions, index) {
        return (
          <div key={index}>
            <div className="definition">{definitions.definition}</div>
            <div>
              {definitions.example && (
                <div className="example">{definitions.example}</div>
              )}
              {definitions.synonyms.length > 0 && (
                <div>
                  <Synonyms synonyms={definitions.synonyms} />
                </div>
              )}
            </div>
          </div>
        );
      })}
      {props.meanings.synonyms.length > 0 && (
        <div>
          <br />
          <strong>Synonyms:</strong>
          <Synonyms synonyms={props.meanings.synonyms} />
        </div>
      )}
    </div>
  );
}