import React from "react";
import classes from "./header.module.scss";
import BackgroundSlider from "react-background-slider";
import AnimatedText from "react-animated-text-content";
import { BsArrowRight } from "react-icons/bs";
import Img1 from "../../assets/images/header-img-1.png";
import Img2 from "../../assets/images/header-img-2.jpg";
import Img3 from "../../assets/images/header-img-3.jpg";
import { Link } from "react-scroll/modules";

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
            animationType="bounce"
            interval={0.06}
            duration={0.8}
            tag="p"
            className={"animated-paragraph " + classes.header__title}
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Честность всегда на первом месте в бизнесе "S-металлом"
          </AnimatedText>
          <div className={classes.wrap}>
            <p className={classes.header__text}>
              S-metal занимается куплей-продажей металла в Москве уже 20 лет.
              После того, как мы получим металлы с вашего адреса. Мы заплатим
              вам удобным для вас способом:
            </p>
            <h1 className={classes.li}>
              <span>1) наличными или</span>
            </h1>
            <h1 className={classes.li}>
              <span>2) банковским переводом.</span>
            </h1>
          </div>
          <Link
            to="4"
            spy
            smooth
            delay={0}
            offset={0}
            duration={2000}
            className={classes.header__btn}
          >
            <span>Связаться с нами</span>
            <BsArrowRight className={classes.arrowicon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
