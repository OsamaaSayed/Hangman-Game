import styles from "./HangmanWord.module.css";

const HangmanWord = () => {
  const wordToGuess = "test";
  const gussedLetters = ["t", "e"];

  return (
    <div className={styles.container}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: gussedLetters.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
