import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.section}>
      <div className={classes.mealContainer}> 
        <h2>Delecious Food, Delivered To You</h2>
        <p>
          choose your favourite meal from our broad selection of available meals and enjoy
          a delecious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high quality ingredients, just-in-time and ofcourse
          by experienced chefs!
        </p>
      </div>
    </section>
  )
}

export default MealsSummary