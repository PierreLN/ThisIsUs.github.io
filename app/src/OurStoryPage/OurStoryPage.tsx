import styles from "./OurStoryPage.module.css";
import Card from "../UI/Card";

const OurStoryPage = (props: any) => {
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
        <div className={styles["bottom-1-section"]}>
          <div className={styles.larger}>How we met</div>
          <div></div>
        </div>
        <div className={styles["bottom-2-section"]}>
          <div className={styles.larger}>The adventures </div>
          <div></div>
        </div>
        <div className={styles["bottom-3-section"]}>
          <div className={styles.larger}>The moments that led us to this special day</div>
          <div>

          </div>
        </div>
      </div>
    </Card>
  );
};

export default OurStoryPage;
