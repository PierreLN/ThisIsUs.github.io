import styles from "./RSVPPage.module.css";
import Card from "../../UI/Card";
import RSVPForm from "./RSVPForm";

const RSVPPage = (props: any) => {
  return (
    <Card className={styles.rsvppage}>
      <div className={styles["section-top"]}>
        <div className={styles["section-top-text"]}>
          Your presence at our wedding would mean the world to us. Please take a
          moment to RSVP by [Date] to help us plan for an unforgettable
          celebration. If you are unable to attend, we understand, and your
          regrets are sincerely appreciated. Kindly let us know as soon as
          possible. To RSVP, visit our wedding website at [Website URL]. We
          kindly request that you provide us with the number of guests attending
          and any dietary restrictions or special requests to ensure everyone's
          comfort and enjoyment. Thank you for being a part of our lives and for
          sharing in our joy. We cannot wait to create cherished memories
          together and celebrate the love that has brought us here.
        </div>
      </div>
      <div className={styles["section-bottom"]}>
        <div className={styles["section-bottom-2"]}>
          <div className={styles.description}>
            We're so excited to see you at our big day! Let us know if you can
            make it by March 31st (or else I will hound you)
          </div>
          <RSVPForm></RSVPForm>
        </div>
      </div>
    </Card>
  );
};

export default RSVPPage;
