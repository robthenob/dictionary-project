import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h4>Definition:</h4>
            <p>
              {definition.definition}
              <br />
            </p>
            <h4>Example:</h4>
            <p>
              <em>{definition.example}</em>
            </p>
            <h4>Synonyms</h4>
            <p>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
      <h4>Synonyms</h4>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
