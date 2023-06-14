import styles from "./OurStoryPage.module.css";
import Card from "../../UI/Card";

const OurStoryPage = () => {
  return (
    <Card className={styles.ourstorypage}>
      <div className={styles["top-section"]}>
        Join us as we embark on a beautiful journey of love and togetherness.
        From a chance encounter to a deep bond, our story is a testament to the
        power of destiny and the magic of love. Learn more about how we met, the
        adventures we've shared, and the moments that led us to this special
        day.
      </div>
      <div className={styles["bottom-section"]}>
        <div className={styles["bottom-0-section"]}>
          <div className={styles.larger}>How we met</div>
          <div className={styles["image-section"]}>
            <div className={`${styles["image-00"]} ${styles.image}`}></div>
            <div className={`${styles["image-01"]} ${styles.image}`}></div>
            <div className={`${styles["image-02"]} ${styles.image}`}></div>
          </div>
        </div>
        <div className={styles["bottom-1-section"]}>
          <div className={styles.larger}>The adventures </div>
          <div className={styles["image-section"]}>
            <div className={`${styles["image-10"]} ${styles.image}`}></div>
            <div className={`${styles["image-11"]} ${styles.image}`}></div>

          </div>
        </div>
        <div className={styles["bottom-2-section"]}>
          <div className={styles.larger}>That special day</div>
          <div className={styles["image-section"]}>
            <div className={`${styles["image-20"]} ${styles.image}`}></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OurStoryPage;
