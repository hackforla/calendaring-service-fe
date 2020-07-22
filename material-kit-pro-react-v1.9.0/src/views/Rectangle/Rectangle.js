import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RectangleStyle from "./RectangleStyle.js";
const useStyles = makeStyles(RectangleStyle);

function MyComponent(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.customCard} {...rest}>
      <div className={classes.cardBody}>{children}</div>
    </div>
  );
}

export default MyComponent;
