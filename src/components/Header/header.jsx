import React from "react";
import classes from "./header.module.scss";
import BackgroundSlider from "react-background-slider";
import AnimatedText from "react-animated-text-content";
import { BsArrowRight } from "react-icons/bs";
import Img1 from "../../assets/images/header-img-1.png";
import Img2 from "../../assets/images/header-img-2.jpg";
import Img3 from "../../assets/images/header-img-3.jpg";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <BackgroundSlider
        images={[Img1, Img2, Img3]}
        duration={4}
        transition={1.5}
      />
      <div className={classes.container}>
        <div className={classes.header__content}>
          <AnimatedText
            type="chars" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="diagonal"
            interval={0.06}
            duration={0.8}
            tag="p"
            className={"animated-paragraph " + classes.header__title}
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Vastrum trancom - Your trusted provider
          </AnimatedText>
          <p className={classes.header__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et
            excepturi nesciunt at alias nihil.
          </p>
          <button className={classes.header__btn}>
            <span>Find out more</span>
            <BsArrowRight className={classes.arrowicon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
