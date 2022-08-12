import React, { useState } from "react";
import cx from "classnames";
import classes from "./navbar.module.scss";
import Logo from "../../assets/images/Union.svg";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);
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
    window.scrollY >15 ? setAddClass(true) : setAddClass(false)
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
                  <a
                    href="#pojects"
                    onClick={() => setOpen(!open)}
                    className={toggleActiveStyles(id)}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
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
