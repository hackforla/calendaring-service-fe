import React from 'react';
import Header from '../shared/Header';
import PreferencesCard from './PreferencesCard';
import { Button } from '../../store/index';

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
        }}>
        <Button size='large'>cancel</Button>
        <Button size='large' color='primary'>
          save & next
        </Button>
      </div>
    </>
  );
}
