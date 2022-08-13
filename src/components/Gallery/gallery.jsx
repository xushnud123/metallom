import React from "react";
import classes from "./gallery.module.scss";
import cx from "classnames";
import Img1 from "../../assets/images/header-img-1.png";
import Img2 from "../../assets/images/header-img-2.jpg";
import Img3 from "../../assets/images/header-img-3.jpg";

const Gallery = () => {
  return (
    <div className={classes.wrapper}>
      <div className={cx(classes.item, classes.item1)}>
        <img className={classes.img} src={Img1} alt="" />
      </div>
      <div className={cx(classes.item, classes.item2)}>
        <img src={Img2} className={classes.img} alt="" />
      </div>
      <div className={cx(classes.item, classes.item3)}>
        <img src={Img3} className={classes.img} alt="" />
      </div>
      <div className={cx(classes.item, classes.item4)}>
        <img src={Img1} className={classes.img} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
