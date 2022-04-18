import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="Text">{props.phonetic.text} </span>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
