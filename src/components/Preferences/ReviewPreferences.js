import React from 'react';
import Header from '../shared/Header';
import PreferencesCard from './PreferencesCard';
import { Button } from '../../utils/index';
import { Link } from 'react-router-dom';

export default function ReviewPreferences() {
  return (
    <>
      <Header
        title='Review Preferences'
        subtitle='Review the information is correct before creating'
      />
      <PreferencesCard />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '10px',
        }}>
        <Button size='large'>cancel</Button>
        <Button size='large'
        color='primary'
        component={Link}
        to="/success-screen-two"
        >
          save & next
        </Button>
      </div>
    </>
  );
}
