import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((value) => (
        <span className="cell" key={value}>
          {guess ? guess.value[value] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
