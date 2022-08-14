import React, { useState } from "react";
import { Link, animateScroll as scroll, animateScroll } from "react-scroll";
import cx from "classnames";
import classes from "./navbar.module.scss";
import Logo from "../../assets/images/Union.svg";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const scroll = animateScroll;
  const [active, setActive] = useState({
    activeLink: null,
    navLinks: [
      { id: 1, name: "насчет нас" },
      { id: 2, name: "Товары" },
      { id: 3, name: "Контакт" },
      { id: 4, name: "область" },
    ],
  });

  const fixedNav = () => {
    window.scrollY > 15 ? setAddClass(true) : setAddClass(false);
  };

  window.addEventListener("scroll", fixedNav);

  const toggleActive = (id) => {
    setActive({ ...active, activeLink: active.navLinks[id] });
  };

  const toggleActiveStyles = (id) => {
    if (active.navLinks[id] === active.activeLink) {
      return cx(classes.nav__link, classes.nav__link_active);
    } else {
      return classes.nav__link;
    }
  };

  const scrollTo = () => {
    scroll.scrollTo(100);
  };

  return (
    <div className={cx(classes.wrapper, addClass && classes.wrapper_change)}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <img src={Logo} alt="img not found" />
          </div>
          <ul className={cx(classes.nav__list, open && classes.nav__list_hide)}>
            {active.navLinks.map(({ id, name }) => {
              return (
                <li
                  className={classes.nav__item}
                  onClick={() => toggleActive(id)}
                  key={id}
                >
                  <Link
                    to={`${id}`}
                    smooth
                    activeClass="active"
                    offset={0}
                    delay={0}
                    duration={2000}
                    type="button"
                    ignoreCancelEvents={true}
                    onClick={() => setOpen(!open)}
                    className={toggleActiveStyles(id)}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={classes.comunication__btns}>
            <a href="">
              <TbBrandTelegram />
            </a>
            <a href="">
              <FiPhoneCall />
            </a>
          </div>
          <div className={classes.burgerBtn} onClick={() => setOpen(!open)}>
            {!open ? (
              <CgMenuRight className={classes.btn} />
            ) : (
              <CgClose className={classes.btn} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
