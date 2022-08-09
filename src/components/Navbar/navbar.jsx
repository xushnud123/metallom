import React, { useState } from "react";
import classes from "./navbar.module.scss";
import Logo from "../../assets/images/logo.png";
import WhatsApp from "../../assets/icons/whatsapp.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Phone from "../../assets/icons/phone.svg";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [changeBtn, setChangeBtn] = useState(false);
  const [addClass, setAddClass] = useState(classes.wrapper);
  const [active, setActive] = useState({
    activeLink: null,
    navLinks: [
      { id: 1, name: "Home" },
      { id: 2, name: "About as" },
      { id: 3, name: "Products" },
      { id: 4, name: "Contact" },
    ],
  });

  const fixedNav = () => {
    if (window.scrollY > 15) {
      setAddClass(classes.wrapper + " " + classes.wrapper_change);
    } else {
      setAddClass(classes.wrapper);
    }
  };

  window.addEventListener("scroll", fixedNav);

  const toggleActive = (id) => {
    setActive({ ...active, activeLink: active.navLinks[id] });
  };

  const toggleActiveStyles = (id) => {
    if (active.navLinks[id] === active.activeLink) {
      return classes.nav__link + " " + classes.nav__link_active;
    } else {
      return classes.nav__link;
    }
  };

  const changeBtnFunc = () => {
    setChangeBtn(!changeBtn);
  };

  return (
    <div className={addClass}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <img src={Logo} alt="Metallom" />
          </div>

          <ul
            className={
              classes.nav__list + " " + (changeBtn && classes.nav__list_hide)
            }
          >
            <div
              className={classes.burgerBtn + " " + classes.burgerBtnClose}
              onClick={changeBtnFunc}
            >
              <CgClose className={classes.btn} />
            </div>
            {active.navLinks.map(({ id, name }) => {
              return (
                <li
                  className={classes.nav__item}
                  onClick={() => toggleActive(id)}
                  key={id}
                >
                  <a
                    href="#pojects"
                    onClick={changeBtnFunc}
                    className={toggleActiveStyles(id)}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className={classes.nav__actions}>
            <a className={classes.socials} href="#">
              <img width={42} src={WhatsApp} alt="WhatsApp" />
            </a>
            <a className={classes.socials} href="#">
              <img width={42} src={Telegram} alt="Telegram" />
            </a>
            <a className={classes.socials} href="#">
              <img width={40} src={Phone} alt="Phone" />
            </a>
          </div>

          <div className={classes.burgerBtn} onClick={changeBtnFunc}>
            <CgMenuRight className={classes.btn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
