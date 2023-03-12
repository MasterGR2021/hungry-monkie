import { useContext } from "react";

import classes from "./Cart.module.css";

import CartItem from "./CartItem";

import Modal from "../UI/Modal";

import CartContext from "../../store/Cart-context";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const hasItems = CartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (id) => {};

  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))} */}
      {CartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!hasItems && <p>Your Cart is Empty</p>}
      {hasItems && cartItems}
      <div>
        <span className={classes.total}>Total Amount</span>
        <span>{totalAmount}</span>
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
