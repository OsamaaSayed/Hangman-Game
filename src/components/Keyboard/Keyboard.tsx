import styles from "./Keyboard.module.css";

type KeyboardProps = {
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = ({
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  console.log("keyboard render");

  return (
    <div className={styles.container}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn}
               ${isActive ? styles.active : ""}
              ${isInActive ? styles.inactive : ""} `}
            disabled={isActive || isInActive}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
