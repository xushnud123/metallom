import React from "react";
import { YMaps, Map, Circle } from "react-yandex-maps";
import classes from "./map.module.scss";


const YandexMap = () => {
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
      <div className={classes.map}>
        <YMaps>
          <div>
            <Map
              width={"100%"}
              height={600}
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            >
              {/* <Circle /> */}
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
};

export default YandexMap;
