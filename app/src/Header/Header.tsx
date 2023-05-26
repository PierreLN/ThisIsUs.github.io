import React from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button";

function SideMenu(props: any) {
  const homePageHandler = () => {
    props.onMove("home");
  };
  const ourStoryPageHandler = () => {
    props.onMove("ourstory");
  };
  const whenandwherePageHandler = () => {
    props.onMove("whenAndWhere");
  };
  const activitiesPageHandler = () => {
    props.onMove("activities");
  };
  const rsvpPageHandler = () => {
    props.onMove("rsvp");
  };

  return (
    <div className={styles.side_menu}>
      <div className={styles.signature}>S & H</div>
      <ul>
        <li>
          <Button onClick={homePageHandler}>HOME</Button>
        </li>
        <li>
          <Button onClick={ourStoryPageHandler}>OUT STORY</Button>
        </li>
        <li>
          <Button onClick={whenandwherePageHandler}>WHEN AND WHERE</Button>
        </li>
        <li>
          <Button onClick={activitiesPageHandler}>ACTIVITIES</Button>
        </li>
        <li>
          <Button onClick={rsvpPageHandler} className={styles.reservation}>
              RSVP  
          </Button>
        </li>
        {/* <li>
          <Button>CLIENTS</Button>
        </li>
        <li>
          <Button>FR</Button>
        </li> */}
      </ul>
    </div>
  );
}

export default SideMenu;
