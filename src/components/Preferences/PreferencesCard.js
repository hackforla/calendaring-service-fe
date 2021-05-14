import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  LocationOnIcon,
} from '../../store/index';
import { useStyles } from './PreferencesCardStyles';

export default function PreferencesCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Typography variant='h4'>Training</Typography>
          <Typography variant='h6' color='primary'>
            Edit
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: '5px',
            gap: '5px',
          }}>
          <LocationOnIcon color='primary' />
          <Typography variant='h6'>PSY Main Office</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem',
          }}>
          <Typography variant='body1'>Mon, Tue, Thur, Fri, Sat</Typography>
          <Typography variant='h6'>60 Min</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
