import React,{useState} from "react";
import cx from 'classnames'
import { YMaps, Map} from "react-yandex-maps";
import { CgClose } from "react-icons/cg";
import classes from "./map.module.scss";

const YandexMap = () => {
  const [active,setActive] = useState(false)

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
        <div className={cx(classes.row, active && classes.active)}>
          <div className={classes.btn}>
            <CgClose
              className={classes.btn}
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
        <YMaps>
          <Map
            width={"100%"}
            className={classes.cart}
            // height={600}
            defaultState={{ center: [55.75, 37.57], zoom: 6 }}
          >
           
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default YandexMap;
