import React from "react";
import Navbar from "../Navbar/navbar";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.header__content}>
          <h1 className={classes.header__title}>
            Vastrum trancom - Your trusted provider
          </h1>
          <p className={classes.header__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et
            excepturi nesciunt at alias nihil.
          </p>
          <button className={classes.header__btn}>Find out more</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
