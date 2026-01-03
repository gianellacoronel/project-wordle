import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessesTrack from "../GuessesTrack/GuessesTrack";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesTrack, setGuessesTrack] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuess = {
      value: guess,
      id: crypto.randomUUID(),
    };
    setGuessesTrack([...guessesTrack, nextGuess]);
  }

  return (
    <>
      <GuessesTrack guessesTrack={guessesTrack} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
