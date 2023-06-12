import styles from "./WhenAndWherePage.module.css";
import Card from "../../UI/Card";
import Map from "../../UI/Map";

const WhenAndWherePage = () => {
  return (
    <Card className={styles.whenandwhere}>
      <div className={styles["section-top"]}>
        <div className={styles["section-top-title"]}>
          Save the date and mark your calendars! We are thrilled to invite you
          to celebrate our union on [Date] at the enchanting [Venue]. Located in
          the heart of [Location], this picturesque setting will serve as the
          backdrop to our heartfelt vows and the beginning of our forever. Get
          ready to witness the love that brought us together and the promises
          we'll make to each other.
        </div>
      </div>
      <div className={styles["section-bottom"]}>
        <div className={styles["section-bottom-first"]}></div>
        <div className={styles["section-bottom-second"]}>
          <div className={styles["section-bottom-second-box"]}>
            <div className={styles["section-bottom-second-image"]}>
              <Map className={styles["section-bottom-second-map"]}></Map>
            </div>
            <div className={styles["section-bottom-second-description"]}>
              <div className={styles['section-bottom-second-description-shadow']}></div>
            </div>
          </div>
        </div>
        <div className={styles["section-bottom-third"]}></div>
      </div>
    </Card>
  );
};

export default WhenAndWherePage;
