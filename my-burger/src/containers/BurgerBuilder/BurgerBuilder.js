import React, { Component,Fragment } from "react";
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
          <Burger/>
          <div>build controllers ingredients</div>
      </Fragment>
    )
  }
}

export default BurgerBuilder;
