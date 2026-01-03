import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>{" "}
      <input
        required
        type="text"
        id="guess-input"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="Please, enter exactly 5 characters 😊"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
