import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import MyComponentStyle from "assets/jss/material-kit-pro-react/views/MyComponentStyle.js";
import CardBody from "components/Card/CardBody";
const useStyles = makeStyles(MyComponentStyle);

function MyComponent(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Card className={classes.customCard} {...rest}>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export default MyComponent;
