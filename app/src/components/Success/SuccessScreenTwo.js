import React from 'react';
import classes from './SuccessScreenTwo.module.scss';
import { Button } from '../../store/index';
import { WhiteCheckmarkIcon } from '../../store/index';

export default function SuccessScreenTwo() {
    return (
        <div className={classes.main}>
            <img src={WhiteCheckmarkIcon.default} className='whiteCheckmarkIcon' alt='whiteCheckMarkIcon' />
            <div className={classes.SuccessScreenTwoHeading}>
                <h5>Success!</h5>
            </div>
            <div className={classes.SuccessScreenTwoText}>
                <p className='body-text'>
                    Your meeting preferences for TRAINING have been set. Please continue set up and manage your preferences by visisting your dashboard.
                </p>
            </div>
            <div className={classes.SuccessScreenTwoButton}>
                <Button variant='contained' color='primary'>
                    Complete Setup
                </Button>
            </div>
        </div>
    );
}

