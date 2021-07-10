import React, { useEffect, useState } from 'react';
import Header from './Header';
import { TextField, FormControl, Button } from '../../utils/index';
import { useStyles } from './ContactReviewStyles';
import { Link } from 'react-router-dom';

const HARD_CODED_DATA = {
  caseWorker: 'Tracy',
  firstName: 'Nina',
  lastName: 'Mosley',
  email: 'nina99@gmail.com',
  phoneNumber: '+1 (213) 555-5555',
};

export default function ContactReview() {
  const {
    root,
    letterSpacing,
    required,
    formSpace,
    staticInput,
    disabled,
    editButton,
    buttonContainer,
    inputRow,
    EditableInput,
  } = useStyles();
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
    <div className={root}>
      <Header
        title='Contact Information'
        description='Review your profile information below'
        activity={`Training with ${HARD_CODED_DATA.caseWorker}`}
      />

      <FormControl>
        <label className={letterSpacing}>
          First Name<span className={required}>*</span>
        </label>
        <TextField
          className={formSpace}
          variant='outlined'
          fullWidth
          name='firstName'
          value={inputs.firstName}
          InputProps={{
            readOnly: true,
            'aria-readonly': true,
            classes: {
              input: staticInput,
            },
          }}
          required
        />

        <label className={letterSpacing}>
          Last Name<span className={required}>*</span>
        </label>
        <TextField
          className={formSpace}
          variant='outlined'
          fullWidth
          name='lastName'
          value={inputs.lastName}
          InputProps={{
            readOnly: true,
            'aria-readonly': true,
            classes: {
              input: staticInput,
            },
          }}
          required
        />

        <label className={letterSpacing}>
          Email Address<span className={required}>*</span>
        </label>
        <div className={inputRow}>
          <TextField
            className={formSpace}
            type='email'
            variant='outlined'
            fullWidth
            name='email'
            value={inputs.email}
            onChange={handleChange}
            disabled={!editMode.email}
            InputProps={{
              classes: {
                disabled: disabled,
                input: EditableInput,
              },
            }}
            required
          />
          <Button
            color='primary'
            className={editButton}
            onClick={() => toggleEdit({ ...editMode, email: !editMode.email })}
          >
            {editMode.email ? 'confirm' : 'edit'}
          </Button>
        </div>

        <label className={letterSpacing}>Phone Number (Optional)</label>
        <div className={inputRow}>
          <TextField
            className={formSpace}
            type='text'
            variant='outlined'
            fullWidth
            name='phoneNumber'
            value={inputs.phoneNumber}
            onChange={handleChange}
            disabled={!editMode.phoneNumber}
            InputProps={{
              classes: {
                disabled: disabled,
                input: EditableInput,
              },
            }}
          />
          <Button
            color='primary'
            className={editButton}
            onClick={() =>
              toggleEdit({ ...editMode, phoneNumber: !editMode.phoneNumber })
            }
          >
            {editMode.phoneNumber ? 'confirm' : 'edit'}
          </Button>
        </div>
      </FormControl>

      <div className={buttonContainer}>
        <Button component={Link} to='/calendarselectedtimes' size='large'>
          Go Back
        </Button>
        <Button
          size='large'
          color='primary'
          component={Link}
          to='/confirmation'
        >
          Next
        </Button>
      </div>
    </div>
  );
}
