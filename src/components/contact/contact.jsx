import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import classes from "./contact.module.scss";
import img from '../../assets/images/header-img-1.png'

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
              <button className={classes.btn}>
                <span>Телефон</span>
                <BsArrowRight className={classes.arrowicon} />
              </button>
              <a href="#" className={classes.btn_a}>
                +(998) 99 882 06 41
              </a>
            </div>
            <div className={classes.btn_wrap}>
              <button className={classes.btn}>
                <span>WhatsApp</span>
                <BsArrowRight className={classes.arrowicon} />
              </button>
              <a href="#" className={classes.btn_a}>
                +(998) 99 882 06 41
              </a>
            </div>
            <div className={classes.btn_wrap}>
              <button className={classes.btn}>
                <span>Telegram</span>
                <BsArrowRight className={classes.arrowicon} />
              </button>
              <a href="#" className={classes.btn_a}>
                +(998) 99 882 06 41
              </a>
            </div>
            <div className={classes.btn_wrap}>
              <button className={classes.btn}>
                <span>Email</span>
                <BsArrowRight className={classes.arrowicon} />
              </button>
              <a href="#" className={classes.btn_a}>
                sunnat@gmail.com
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
