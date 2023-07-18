import styles from "./HangmanDrawing.module.css";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;
const RIGHT_ARM = <div className={styles.rightArm} />;
const LEFT_ARM = <div className={styles.leftArm} />;
const RIGHT_LEG = <div className={styles.rightLeg} />;
const LEFT_LEG = <div className={styles.leftLeg} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  console.log('Drawing render');
  
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.verticalSmallLine} />
      <div className={styles.horizontalTopLine} />
      <div className={styles.verticalLine} />
      <div className={styles.horizontalBottomLine} />
    </div>
  );
};

export default HangmanDrawing;
