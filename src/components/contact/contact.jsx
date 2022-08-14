import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import classes from "./contact.module.scss";
import img from "../../assets/images/header-img-1.png";

const Contact = () => {
  return (
    <div className={classes.wrapper} id="3">
      <h1 className={classes.title}>Контакт</h1>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.location}>Наши местоположения</h1>
          <div className={classes.wrap}>
            <a
              href="https://yandex.uz/maps/-/CCURRTTogB"
              className={classes.header}
            >
              <AiOutlinePlus />
            </a>
            <a href="https://yandex.uz/maps/-/CCURRTTogB" className={classes.a}>
              Ленинский городской район Московской области
            </a>
          </div>
          <div className={classes.body}>
            <div className={classes.btn_wrap}>
              <a href="tel:+7967 034-18-31" className={classes.btn}>
                <span>Телефон</span>
                <BsArrowRight className={classes.arrowicon} />
              </a>
              <a href="tel:+7967 034-18-31" className={classes.btn_a}>
                + (7 967) 034-18-31
              </a>
            </div>
            <div className={classes.btn_wrap}>
              <a href="https://wa.me/79670341831" className={classes.btn}>
                <span>WhatsApp</span>
                <BsArrowRight className={classes.arrowicon} />
              </a>
              <a href="https://wa.me/79670341831" className={classes.btn_a}>
                + (7 967) 034-18-31
              </a>
            </div>
            <div className={classes.btn_wrap}>
              <a href="tel:+7967 034-18-31" className={classes.btn}>
                <span>Telegram</span>
                <BsArrowRight className={classes.arrowicon} />
              </a>
              <a href="https://t.me/S-Metallom" className={classes.btn_a}>
                + (7 967) 034-18-31
              </a>
            </div>
            <div className={classes.btn_wrap}>
              <a
                href="mailto:sunatrayimovich@gmail.com"
                className={classes.btn}
              >
                <span>Email</span>
                <BsArrowRight className={classes.arrowicon} />
              </a>
              <a
                href="mailto:sunatrayimovich@gmail.com"
                className={classes.btn_a}
              >
                sunatrayimovich@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <img src={img} alt="img not found" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
