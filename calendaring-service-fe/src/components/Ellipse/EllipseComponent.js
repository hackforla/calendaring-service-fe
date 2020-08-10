import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EllipseComponentStyle from "./EllipseComponentStyle";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles(EllipseComponentStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

function EllipseComponent(props) {
  const { image, modalOpen, setModalOpen } = props;
  const classes = useStyles();

  const testing = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div onClick={testing} style={{ marginLeft: "1rem" }}>
      <img className={classes.ellipse} src={image} alt="something" />
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal,
        }}
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModalOpen(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setModalOpen(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Modal title</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <p>Something to say here</p>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button>Nice Button</Button>
          <Button onClick={() => setModalOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EllipseComponent;
