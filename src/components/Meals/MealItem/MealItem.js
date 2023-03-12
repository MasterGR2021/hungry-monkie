import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";

import CartContext from "../../../store/Cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(props);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.mealContainer}>
      <li className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </li>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;
