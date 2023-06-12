import styles from "./ActivitiesPage.module.css";
import Card from "../../UI/Card";

const ActivitiesPage = () => {
  return (
    <Card className={styles.activities}>
      <div className={styles["section-top"]}></div>
      <div className={styles.title}>
        Prepare to be swept away by a day filled with love, joy, and
        unforgettable moments. Our wedding celebration is designed to create
        memories that will last a lifetime. Here's a glimpse of what's in store
        for you: Ceremony: Witness the exchange of our vows in a touching
        ceremony that symbolizes our commitment to each other. Cocktail Hour:
        Raise a glass and mingle with friends and family during our delightful
        cocktail hour. Sip on signature drinks, savor delectable appetizers, and
        toast to our happiness. Reception: As the sun sets, the festivities will
        continue with an enchanting reception. Dance the night away to live
        music, capture fun moments at the photo booth, and indulge in a
        sumptuous dinner prepared with love.
      </div>

      <div className={styles["section-bottom"]}>
        <div className={styles["section-bottom-card"]}>
          <div className={styles["card-schedule"]}>
            <div className={styles.schedule}>
              <em>SCHEDULE</em>
            </div>
            <div className={styles['card-days']}>
              <div className={styles.days}>
                <div>Friday, August 10th</div>
                <hr />
                <div>Saturday, August 11th</div>
                <hr />
                <div>Sunday, August 12th</div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActivitiesPage;
