import styles from "./MainPage.module.css";
import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import HomePage from "../HomePage/HomePage";
// import OurStoryPage from "../OurStoryPage/OurStoryPage";
// import WhenAndWherePage from "../WhenAndWhere/WhenAndWherePage";
// import ActivitiesPage from "../ActivitiesPage/ActivitiesPage";
// import RSVPPage from "../RSVP/RSVPPage";

const OurStoryPage = lazy(() => import("../OurStoryPage/OurStoryPage"));
const WhenAndWherePage = lazy(() => import("../WhenAndWhere/WhenAndWherePage"));
const ActivitiesPage = lazy(() => import("../ActivitiesPage/ActivitiesPage"));
const RSVPPage = lazy(() => import("../RSVP/RSVPPage"));

function MainPage(props: any) {
  const mainPageRef = useRef(null);

  const homePage = <HomePage onClick={props.onClick}></HomePage>;
  const outStoryPage = (
    <Suspense fallback="Loading...">
      <OurStoryPage></OurStoryPage>
    </Suspense>
  );
  const whenAndWherePage = (
    <Suspense fallback="Loading...">
      <WhenAndWherePage></WhenAndWherePage>
    </Suspense>
  );

  const activitiesPage = (
    <Suspense fallback="Loading...">
      <ActivitiesPage></ActivitiesPage>
    </Suspense>
  );
  const rsvpPage = (
    <Suspense fallback="Loading...">
      <RSVPPage></RSVPPage>
    </Suspense>
  );

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
