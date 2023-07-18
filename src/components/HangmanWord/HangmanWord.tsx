import styles from "./HangmanWord.module.css";

type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
};

const HangmanWord = ({ wordToGuess, guessedLetters }: HangmanWordProps) => {
  console.log('Word render');
  
  return (
    <div className={styles.container}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
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
