import { answer } from "../Game";

function Banner({ guess, guessesTrack }) {
  function defineResult() {
    console.log({ guessesTrack }, { guess }, { answer });
    if (guess === answer) {
      return true;
    } else if (guessesTrack.length >= 6 && guess !== answer) {
      return false;
    }
    return null;
  }
  const result = defineResult();
  console.log(result);

  if (result !== null) {
    if (result) {
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessesTrack.length} guesses</strong>.
          </p>
        </div>
      );
    } else {
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    }
  } else {
    return null;
  }
}

export default Banner;
