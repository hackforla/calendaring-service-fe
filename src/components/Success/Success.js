import React from 'react';
import Stepper from './Stepper';
import classes from './Success.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setName } from '../../userSlice';
import { CheckCircleIcon, Button, Typography } from '../../utils/index';

export default function Success() {
  const { user } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div className={classes.main}>
      {user.name}
      <button onClick={() => dispatch(setName('george'))}>change name</button>
      <CheckCircleIcon
        className={classes.checkCircle}
        style={{ height: '5rem', width: '5rem' }}
      />
      <Typography variant="h5">Success!</Typography>
      <Stepper />
      <Typography variant="body1" className="body-text">
        Thanks for setting up your availability! We will use this information
        when you customize your meeting types. Visit your Dashboard and
        personalize your meeting types to complete calendar set up.
      </Typography>
      <Button variant="contained" color="primary">
        <Link to="/">complete setup</Link>
      </Button>
    </div>
  );
}
