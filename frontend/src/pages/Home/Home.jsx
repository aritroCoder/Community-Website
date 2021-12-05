import React, { useEffect } from "react";
import { Overview } from "./components/Overview/index";
import { Motive } from "./components/Motive/index";
import { Carousel } from "./components/Carousel/index";
import { JoinUs } from "./components/JoinUs/index";

import styles from "./home.module.scss";

export const Home = (props) => {
  let dark = props.theme;

  useEffect(() => {
    window.scrollTo(0, 0);  //for scrolling to top once the page is loaded  
    //eslint-disable-next-line
  },[])

  return (
    <div
      className={
        dark ? `${styles["home"]} ${styles["dark"]}` : `${styles["home"]}`
      }
    >
      <Overview theme={dark} />
      <Motive theme={dark} />
      <Carousel theme={dark} />
      <JoinUs theme={dark} />
    </div>
  );
};
