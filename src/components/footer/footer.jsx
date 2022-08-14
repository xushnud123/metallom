import classes from "./foooter.module.scss";
import logo from '../../assets/images/Union.svg'

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.row}>
          <img src={logo} alt="img not found" />
          <a href="#" >Tel: +(998) 99 882 06 41</a>
          <p>&copy; 2022 Xushnud, Все права защищены</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
