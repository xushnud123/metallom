import React from "react";
import cx from 'classnames'
import {ImLocation2} from 'react-icons/im'
import classes from "./map.module.scss";

const YandexMap = () => {

  return (
    <div className={classes.wrapper} id="3">
      <h1 className={classes.title}>
        Границы нашей деятельности на <span>карте</span>
      </h1>
      <div className={classes.wrap}>
        <p className={classes.link}>
          Адреса, где в настоящее время предоставляются наши услуги:
          <span>
            <ImLocation2 /> Г. Москва
          </span>
          <span>
            <ImLocation2 /> в Московской области
          </span>
        </p>
        <a
          href="https://yandex.uz/maps/-/CCURRTTogB"
          className={cx(classes.link, classes.links)}
        >
          Наш адресс
          <span>
            <ImLocation2 /> Ленинский городской район Московской области
          </span>
        </a>
      </div>
    </div>
  );
};

export default YandexMap;
