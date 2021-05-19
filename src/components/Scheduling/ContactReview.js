import React, { useEffect, useState } from 'react';
import Header from './Header';
import { TextField, FormControl, Button } from '../../utils/index';
import { useStyles } from './ContactReviewStyles';

const HARD_CODED_DATA = {
  caseWorker: 'Tracy',
  firstName: 'Nina',
  lastName: 'Mosley',
  email: 'nina99@gmail.com',
  phoneNumber: '+1 (213) 555-5555',
};

export default function ContactReview() {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    caseWorker: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [editMode, toggleEdit] = useState({
    email: false,
    phoneNumber: false,
  });

  useEffect(() => {
    setInputs(HARD_CODED_DATA);
  }, []);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.root}>
      <Header
        title='Contact Information'
        description='Review your profile information below'
        activity={`Training with ${HARD_CODED_DATA.caseWorker}`}
      />

      <FormControl>
        <label className={classes.letterSpacing}>
          First Name<span className={classes.required}>*</span>
        </label>
        <TextField
          className={classes.formSpace}
          variant='outlined'
          fullWidth
          name='firstName'
          value={inputs.firstName}
          InputProps={{
            readOnly: true,
            'aria-readonly': true,
            classes: {
              input: classes.staticInput,
            },
          }}
          required
        />

        <label className={classes.letterSpacing}>
          Last Name<span className={classes.required}>*</span>
        </label>
        <TextField
          className={classes.formSpace}
          variant='outlined'
          fullWidth
          name='lastName'
          value={inputs.lastName}
          InputProps={{
            readOnly: true,
            'aria-readonly': true,
            classes: {
              input: classes.staticInput,
            },
          }}
          required
        />

        <label className={classes.letterSpacing}>
          Email Address<span className={classes.required}>*</span>
        </label>
        <div className={classes.inputRow}>
          <TextField
            className={classes.formSpace}
            type='email'
            variant='outlined'
            fullWidth
            name='email'
            value={inputs.email}
            onChange={handleChange}
            disabled={!editMode.email}
            InputProps={{
              classes: {
                disabled: classes.disabled,
                input: classes.EditableInput,
              },
            }}
            required
          />
          <Button
            color='primary'
            className={classes.editButton}
            onClick={() => toggleEdit({ ...editMode, email: !editMode.email })}
          >
            {editMode.email ? 'confirm' : 'edit'}
          </Button>
        </div>

        <label className={classes.letterSpacing}>Phone Number (Optional)</label>
        <div className={classes.inputRow}>
          <TextField
            className={classes.formSpace}
            type='text'
            variant='outlined'
            fullWidth
            name='phoneNumber'
            value={inputs.phoneNumber}
            onChange={handleChange}
            disabled={!editMode.phoneNumber}
            InputProps={{
              classes: {
                disabled: classes.disabled,
                input: classes.EditableInput,
              },
            }}
          />
          <Button
            color='primary'
            className={classes.editButton}
            onClick={() =>
              toggleEdit({ ...editMode, phoneNumber: !editMode.phoneNumber })
            }
          >
            {editMode.phoneNumber ? 'confirm' : 'edit'}
          </Button>
        </div>
      </FormControl>

      <div className={classes.buttonContainer}>
        <Button size='large'>Go Back</Button>
        <Button size='large' color='primary'>
          Next
        </Button>
      </div>
    </div>
  );
}
