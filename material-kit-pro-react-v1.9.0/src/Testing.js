import React, { useState } from "react";
import Rectangle from "views/Rectangle/Rectangle";
import Ellipse from "views/Ellipse/Ellipse";
import ReactCardFlip from "react-card-flip";
import { makeStyles } from "@material-ui/core/styles";
import RectangleStyle from "./views/Rectangle/RectangleStyle";

const useStyles = makeStyles(RectangleStyle);

function Testing() {
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
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Rectangle>
          <div onClick={handleFlip} className={classes.customCard}>
            whats up dawg
          </div>
        </Rectangle>

        <Rectangle>
          <div onClick={handleFlip} className={classes.customCard2}>
            This is the back of the card.
          </div>
        </Rectangle>
      </ReactCardFlip>

      <Ellipse
        image="https://www.knacktraining.com/wp-content/uploads/2019/01/Illustration.png"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default Testing;
