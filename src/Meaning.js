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
            <div>
              {definition.definition}
              <br />
            </div>
            <h4>Example:</h4>
            <div>
              <em>{definition.example}</em>
            </div>
            <h4>Synonyms</h4>
            <div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
      <h4>Synonyms</h4>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
