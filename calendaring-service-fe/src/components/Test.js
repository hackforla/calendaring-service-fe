import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardComponent from "./Card/CardComponent";
import EllipseComponent from "./Ellipse/EllipseComponent";
import { makeStyles } from "@material-ui/core/styles";
import CardComponentStyle from "./Card/CardComponentStyle";

const useStyles = makeStyles(CardComponentStyle);

function Test() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const classes = useStyles();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      {/**begin Card flip**/}
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardComponent>
          <div onClick={handleFlip} className={classes.customCard}>
            Front of Card
          </div>
        </CardComponent>

        <CardComponent>
          <div onClick={handleFlip} className={classes.customCard2}>
            Back of Card
          </div>
        </CardComponent>
      </ReactCardFlip>
      {/**end of Card flip**/}

      {/**begin Ellipse Modal**/}
      <EllipseComponent
        image="https://www.knacktraining.com/wp-content/uploads/2019/01/Illustration.png"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {/**end Ellipse Modal**/}
    </div>
  );
}

export default Test;
