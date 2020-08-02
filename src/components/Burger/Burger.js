import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import {withRouter} from 'react-router-dom'

const burger = (props) => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)
   //**check out default javascript array functions (i.e. map & reduce)
  .map((ingrKey) => {
      return [...Array(props.ingredients[ingrKey])].map((_, index) => {
        return <BurgerIngredient key={ingrKey + index} type={ingrKey} />;
      });
    })
    .reduce((reducedValueArray, currentValue) => {
      return reducedValueArray.concat(currentValue);
   //below is either an empty array or contains jsx elements
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);