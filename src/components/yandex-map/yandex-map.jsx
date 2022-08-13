import React, { useState } from "react";
import cx from "classnames";
import classes from "./map.module.scss";

const YandexMap = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        Границы нашей деятельности на <span>карте</span>
      </h1>
      <p>
        Адреса, где в настоящее время предоставляются наши услуги:
        <span>1) Г. Москва </span>
        <span>2) в Московской области</span>
      </p>
    
    </div>
  );
};

export default YandexMap;
