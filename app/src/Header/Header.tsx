import React from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button";

function SideMenu(props: any) {

  const homePageHandler = () => {
    props.onMove("home");
  };
  const aboutPageHandler = () => {
    props.onMove("about");
  };
  const ProjectPageHandler = () => {
    props.onMove("project");
  };
  const ContactPageHandler = () => {
    props.onMove("contact");
  };

  return (
    <div className={styles.side_menu}>
      <ul>
        <li>
          <Button onClick={homePageHandler}>OUT STORY</Button>
        </li>
        <li>
          <Button onClick={ProjectPageHandler}>WHEN AND WHERE</Button>
        </li>
        <li>
          <Button onClick={aboutPageHandler}>ACTIVITIES</Button>
        </li>
        <li>
          <Button onClick={ContactPageHandler} className={styles.reservation}>== RSVP ==</Button>
        </li>
        {/* <li>
          <Button>SERVICES</Button>
        </li>
        <li>
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
