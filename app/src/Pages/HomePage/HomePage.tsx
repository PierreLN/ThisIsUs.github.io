import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles["homepage-top"]}>
      </div>
      <div className={styles["homepage-bottom"]}>
        <div className={styles.title}>Celebrating Love and Forever!</div>
        <div className={styles.name}>She & He</div>
        <div className={styles.description}>
          <em>Please join us
          <div>As we tie the knot</div></em>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
