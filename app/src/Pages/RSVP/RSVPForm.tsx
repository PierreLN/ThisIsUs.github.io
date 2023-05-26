import styles from "./RSVPForm.module.css";
import { useState } from "react";

const RSVPForm = (props: any) => {
  const [reservation, setReservation] = useState({
    firstname: "",
    lastname: "",
    email: "",
    attending: true,
    notAttending: false,
    guess: "",
    note: "",
  });

  const onSubmitHanlder = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(
      "https://react-http-6ae90-default-rtdb.firebaseio.com/rsvp.json",
      {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.isCommig(reservation);
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    const newValue = type === "checkbox" ? checked : value;

    setReservation((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <div className={styles["rsvp-form"]}>
      <form className={styles.form} onSubmit={onSubmitHanlder}>
        <div className={styles.name}>
          <div className={styles["firstname-section"]}>
            <div>First Name*</div>
            <input
              className={styles.firstname}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="(required)"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={styles["lastname-section"]}>
            <div>Last Name*</div>
            <input
              className={styles.lastname}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="(required)"
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
        <br />
        <div>Email*</div>
        <input
          className={styles.email}
          type="email"
          name="email"
          id="email"
          placeholder="(required)"
          onChange={onChangeHandler}
          required
        />
        <br />
        <br />
        <div>Will you be attending? (required)*</div>
        <div className={styles.attendence}>
          <input
            onChange={onChangeHandler}
            type="checkbox"
            name="attending"
            id="attending"
            defaultChecked
          />
          <div>Yes</div>
        </div>
        <div className={styles.attendence}>
          <input
            onChange={onChangeHandler}
            type="checkbox"
            name="notAttending"
            id="notAttending"
          />
          <div>No</div>
        </div>
        <br />
        <div>
          If your invite has multiple names or it says 'Guest' add the names
          here.
        </div>
        <input
          className={styles.guess}
          type="text"
          name="guess"
          id="guess"
          placeholder="Guess?"
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <div>Anything else you want to share?</div>
        <textarea
          onChange={onChangeHandler}
          className={styles.note}
          name="note"
          id="note"
        ></textarea>
        <br />
        <br />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
