import React from 'react';
import Header from '../shared/Header';
import Form from './Form';

export default function Preferences() {
  return (
    <>
      <Header
        title='Meeting Preferences'
        subtitle='Set your preferences for this meeting type using the options below'
      />
      <Form />
    </>
  );
}
