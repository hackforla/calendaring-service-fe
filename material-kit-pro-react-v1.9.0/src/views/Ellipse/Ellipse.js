import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EllipseStyle from "./EllipseStyle.js";
const useStyles = makeStyles(EllipseStyle);

function Ellipse(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <div {...rest}>
      <div>{children}</div>
    </div>
  );
}

export default Ellipse;
