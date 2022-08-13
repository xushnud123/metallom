import React, { useState } from "react";
import cx from "classnames";
import { CgClose } from "react-icons/cg";
import { YMaps, Map, Placemark, Circle } from "react-yandex-maps";
import classes from "./yandex.module.scss";

const Yandex = () => {
    const [active, setActive] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div className={cx(classes.row, active && classes.active)}>
        <div className={classes.btn}>
          <CgClose className={classes.btn} onClick={() => setActive(!active)} />
        </div>
      </div>
      <YMaps>
        <Map
          width={"100%"}
          className={classes.cart}
          defaultState={{ center: [55.516621, 37.762587], zoom: 6 }}
        >
          <Placemark
            geometry={[55.516621, 37.762587]}
            properties={{
              balloonContentBody: "Test 6",
            }}
          />
          <Circle geometry={[[55.516621, 37.762587], 100000]} />
        </Map>
      </YMaps>
    </div>
  );
};

export default Yandex;
