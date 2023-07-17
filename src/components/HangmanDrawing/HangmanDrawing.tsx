import styles from "./HangmanDrawing.module.css";

const HangmanDrawing = () => {
  const HEAD = <div className={styles.head} />;

  const BODY = <div className={styles.body} />;

  const RIGHT_ARM = <div className={styles.rightArm} />;

  const LEFT_ARM = <div className={styles.leftArm} />;

  const RIGHT_LEG = <div className={styles.rightLeg} />;

  const LEFT_LEG = <div className={styles.leftLeg} />;

  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
