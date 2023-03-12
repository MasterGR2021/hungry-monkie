import styles from "./Header.module.css";
import mealImg from "../../assets/food.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <div className={styles.headerWrapper}>
        <h2>HungyMonkie</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
      <div className={styles.headerImage}>
        <img src={mealImg} alt="Food on Table"></img>
      </div>
    </>
  );
}

export default Header;
