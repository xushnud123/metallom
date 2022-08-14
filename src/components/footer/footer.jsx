import classes from "./foooter.module.scss";
import logo from "../../assets/images/Union.svg";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.row}>
          <img src={logo} alt="img not found" />
          <a href="tel:+7967 034-18-31">Tel: + (7 967) 034-18-31</a>
          <p>&copy; 2022 "S-Metallom", Все права защищены</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
