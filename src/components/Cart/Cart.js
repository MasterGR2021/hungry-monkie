import { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

import CartContext from "../../store/Cart-context";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const hasItems = CartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))} */}
      {CartCtx.items.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!hasItems && <p>Your Cart is Empty</p>}
      {hasItems && cartItems}
      <div>
        <span className={classes.total}>Total Amount</span>
        <span>{CartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
