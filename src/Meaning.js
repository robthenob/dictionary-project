import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
            </p>
            <p>
              <em>{definition.example}</em>
            </p>
            <p>
              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
