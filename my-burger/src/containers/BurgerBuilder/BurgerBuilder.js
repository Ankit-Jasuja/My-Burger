import React, { Component,Fragment } from "react";
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
  state={
    ingredients:{
      salad:1,
      cheese:2,
      bacon:3,
      meat:1
    }
  }

  render() {
    return (
      <Fragment>
          <Burger burgerIngredients={this.state.ingredients} />
         <BurgerControls></BurgerControls>
      </Fragment>
    )
  }
}

export default BurgerBuilder;
