import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => (
  <div className={classes.BuildControl}>
    <div classes={classes.Label}>{props.label}</div>
    <button classes={classes.Less}>Less</button>
    <button classes={classes.More}>More</button>
  </div>
);

export default BuildControl;
