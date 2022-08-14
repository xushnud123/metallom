import classes from "./cards.module.scss";
import img from "../../assets/images/header-img-3.jpg";
import stal from "../../assets/images/m/stal.webp";
import nikel from "../../assets/images/m/nicel-min.jpg";
import bronza from "../../assets/images/m/bronza.png";
import ner from "../../assets/images/m/nerjaveyka.png";
import kabel from "../../assets/images/m/mis kabel.webp";
import elektr from "../../assets/images/m/motor-min.jpg";
import svi from "../../assets/images/m/svi.png";
import sink from "../../assets/images/m/sink.webp";
import lom from "../../assets/images/m/lom-min.jpg";
import alumin from "../../assets/images/m/aluminy.png";
import latun from "../../assets/images/m/latun.webp";
import akk from "../../assets/images/m/car_batteries_mockup_perspective.png";

const imgHandler = (id) => {
  switch (String(id)) {
    case "1":
      return stal;
    case "2":
      return nikel;
    case "3":
      return bronza;
    case "4":
      return ner;
    case "5":
      return kabel;
    case "6":
      return elektr;
    case "7":
      return svi;
    case "8":
      return sink;
    case "9":
      return lom;
    case "10":
      return alumin;
    case "11":
      return latun;
    case "12":
      return akk;
    default:
      return stal;
  }
};

const Cards = ({ todos }) => {
  return (
    <div className={classes.wrapper} id="2">
      <h1 className={classes.name}>Продукты, которые мы покупаем и продаем.</h1>
      <div className={classes.cards}>
        {todos.map((item, id) => (
          <div key={item.title} className={classes.card}>
            <div className={classes.header}>
              <img src={imgHandler(id + 1)} alt="img not found" />
            </div>
            <div className={classes.body}>
              <div className={classes.wrap}>
                <h1 className={classes.title}>{item.title}</h1>
                <p className={classes.price}>цена: {item.number}₽</p>
              </div>
              <p className={classes.date}>
                <span>Время:&nbsp;</span>
                {item.date}.{item?.month}.{item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
