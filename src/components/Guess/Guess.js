import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { answer } from "../Game";

function Guess({ guess }) {
  const status = guess ? checkGuess(guess.value, answer) : "";

  return (
    <p className="guess">
      {range(5).map((value) => {
        return (
          <span
            className={`cell ${
              guess &&
              (status[value].letter === guess.value[value]
                ? status[value].status
                : null)
            }`}
            key={value}
          >
            {guess ? guess.value[value] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
