import React, { Component,Fragment } from "react";
import Burger from '../../components/Burger/Burger'

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
          <div>build controllers ingredients</div>
      </Fragment>
    )
  }
}

export default BurgerBuilder;
