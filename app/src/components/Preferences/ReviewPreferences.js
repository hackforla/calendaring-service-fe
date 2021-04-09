import React from 'react';
import Header from '../shared/Header';
import PreferencesCard from './PreferencesCard';

export default function ReviewPreferences() {
  return (
    <>
      <Header
        title='Review Preferences'
        subtitle='Review the information is correct before creating'
      />
      <PreferencesCard />
    </>
  );
}
