import classes from "./cards.module.scss";
import img from "../../assets/images/header-img-3.jpg";

const Cards = ({ todos }) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.name}>Продукты, которые мы покупаем и продаем.</h1>
      <div className={classes.cards}>
        {todos.map((item) => (
          <div key={item.title} className={classes.card}>
            <div className={classes.header}>
              <img src={img} alt="img not found" />
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
