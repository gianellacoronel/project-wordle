import React from "react";

function GuessesTrack({ guessesTrack }) {
  return (
    <div className="guess-results">
      {guessesTrack.map(({ value, id }, index) => (
        <p className="guess" key={id}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessesTrack;
