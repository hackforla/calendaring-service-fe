import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import MyComponentStyle from "assets/jss/material-kit-pro-react/views/MyComponentStyle.js";
import CardBody from "components/Card/CardBody";
const useStyles = makeStyles(MyComponentStyle);

function MyComponent() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.customCard}>
        <CardBody>Training</CardBody>
      </Card>
      <div className={classes.ellipse}></div>
    </div>
  );
}

export default MyComponent;
