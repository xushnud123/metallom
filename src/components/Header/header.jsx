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
          <p className={classes.header__text}>
            "S-металлом" занимается куплей-продажей металлов в Москве уже 20
            лет. Мы заберем металлы с вашего адреса и оплатим на месте.
          </p>
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
