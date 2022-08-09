import classes from "./cards.module.scss";
import img from "../../assets/images/header-bg.jpg";

const arr = [1, 2, 3, 4, 5, 6];

const Cards = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.cards}>
        {arr.map((item) => (
          <div key={item} className={classes.card}>
            <div className={classes.header}>
              <img src={img} alt="img not found" />
            </div>
            <div className={classes.body}>
              <div className={classes.wrap}>
                <h1 className={classes.title}>Latum</h1>
                <p className={classes.price}>цена: 2222₽</p>
              </div>
              <p className={classes.date}>
                <span>Время:&nbsp;</span>09.09.2022
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
