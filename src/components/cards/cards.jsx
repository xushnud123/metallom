import classes from "./cards.module.scss";
import img from "../../assets/images/header-img-3.jpg";
import stal from "../../assets/images/m/stal.webp";
import nikel from "../../assets/images/m/nicel-min.jpg";
import bronza from "../../assets/images/m/bronza.png";
import ner from "../../assets/images/m/nerjaveyka2.png";
import cable from "../../assets/images/m/cable.jpg";
import elektr from "../../assets/images/m/motor-min.jpg";
import svi from "../../assets/images/m/svi2.png";
import sink from "../../assets/images/m/sink.jpg";
import lom from "../../assets/images/m/lom-min.jpg";
import alumin from "../../assets/images/m/aluminy.png";
import latun from "../../assets/images/m/latun.jpg";
import akumulyator from "../../assets/images/m/akumulyator.png";
import med1 from "../../assets/images/m/med1.jpeg";
import med2 from "../../assets/images/m/med2.jpeg";

const imgHandler = (id) => {
  switch (String(id)) {
    case "1":
      return stal;
    case "2":
      return nikel;
    case "Бронза":
      return bronza;
    case "Нержавейка":
      return ner;
    case "Кабель":
      return cable;
    case "6":
      return elektr;
    case "Свинец":
      return svi;
    case "Цинк":
      return sink;
    case "Черный Лом":
      return lom;
    case "Алюминий":
      return alumin;
    case "Латунь":
      return latun;
    case "Аккумуляторы":
      return akumulyator;
    case "Медь блестящая":
      return med1;
    case "Медь сварочник":
      return med2;
    default:
      return stal;
  }
};

const Cards = ({ todos }) => {
  return (
    <div className={classes.wrapper} id="2">
      <h1 className={classes.name}>Продукты, которые мы покупаем и продаем.</h1>
      <div className={classes.cards}>
        {todos.map((item) => (
          <div key={item.title} className={classes.card}>
            <div className={classes.header}>
              <img src={imgHandler(item.title)} alt="img not found" />
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
