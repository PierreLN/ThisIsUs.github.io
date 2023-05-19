import styles from "./MainPage.module.css";
import React, { useState, useEffect, useRef } from "react";
import WhenAndWherePage from "../WhenAndWhere/WhenAndWherePage";
import ActivitiesPage from "../ActivitiesPage/ActivitiesPage";
import RSVPPage from "../RSVP/RSVPPage";
import HomePage from "../HomePage/HomePage";
import OurStoryPage from "../OurStoryPage/OurStoryPage";

function MainPage(props: any) {
  const mainPageRef = useRef(null);

  const homePage = <HomePage onClick={props.onClick}></HomePage>;
  const whenAndWherePage = <WhenAndWherePage></WhenAndWherePage>;
  const activitiesPage = <ActivitiesPage></ActivitiesPage>;
  const rsvpPage = <RSVPPage></RSVPPage>;
  const outStoryPage = <OurStoryPage></OurStoryPage>;

  const [currentPage, setCurrentPage] = useState(homePage);
  const [background, setBackground] = useState("backgroundPicture0");

  useEffect(() => {
    if (props.selectedPage === "whenAndWhere") {
      setCurrentPage(whenAndWherePage);
    } else if (props.selectedPage === "home") {
      setCurrentPage(homePage);
    } else if (props.selectedPage === "activities") {
      setCurrentPage(activitiesPage);
    } else if (props.selectedPage === "rsvp") {
      setCurrentPage(rsvpPage);
    } else if (props.selectedPage === "ourstory") {
      setCurrentPage(outStoryPage);
    }
  }, [props.selectedPage]);

  // For picture rotation - not activated
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % 2;
      setBackground(`backgroundPicture${currentIndex}`);
    }, 50000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`${styles["main-page"]} ${styles[background]} ${styles.backgroundAnimation}`}
      ref={mainPageRef}
    >
      {currentPage}
    </div>
  );
}

export default MainPage;
