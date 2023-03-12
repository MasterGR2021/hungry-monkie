import classes from "./MealItemForm.module.css";
// import { Ref } from "react";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log(enteredAmount);
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        ref={amountInputRef}
        className={classes.input}
        type="number"
        step="1"
        min="1"
        max="5"
        defaultValue={1}
      />
      <button className={classes.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
