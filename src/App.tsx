import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import { theme } from './theme';
import Dashboard from './components/Welcome/DashboardBody';
import Success from './components/Success/Success';
import ScheduleAvailableDays from './components/ScheduleAvailability/ScheduleAvailability';
import ScheduleAvailableTimes from './components/ScheduleAvailability/ScheduleAvailableTimes';
import SuccessScreenTwo from './components/Success/SuccessScreenTwo';
import MeetingTypes from './components/MeetingTypes/MeetingTypes';
import Preferences from './components/Preferences/Preferences';
import Prompt from './components/Scheduling/Prompt';
import ReviewPreferences from './components/Preferences/ReviewPreferences';
import CalendarView from './components/Scheduling/CalendarView';
import CalendarSelectedTimes from './components/Scheduling/CalendarSelectedTimes';
import HostSuccess from './components/Scheduling/HostSuccess';
import GuestSuccess from './components/Scheduling/GuestSuccess';
import ContactReview from './components/Scheduling/ContactReview';
import ConfirmationScreen from './components/Scheduling/ConfirmationScreen';

//test

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <main style={{ maxWidth: 812, margin: '0 auto' }}>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/success' component={Success} />
              <Route
                exact
                path='/success-screen-two'
                component={SuccessScreenTwo}
              />
              <Route
                exact
                path='/scheduledays'
                component={ScheduleAvailableDays}
              />
              <Route
                exact
                path='/scheduletimes'
                component={ScheduleAvailableTimes}
              />
              <Route exact path='/meetingtypes' component={MeetingTypes} />
              <Route exact path='/preferences' component={Preferences} />
              <Route exact path='/prompt' component={Prompt} />
              <Route
                exact
                path='/review-preferences'
                component={ReviewPreferences}
              />
              <Route exact path='/calendarview' component={CalendarView} />
              <Route exact path='/contactreview' component={ContactReview} />
              <Route exact path='/hostsuccess' component={HostSuccess} />
              <Route exact path='/guestsuccess' component={GuestSuccess} />
              <Route
                exact
                path='/confirmation'
                component={ConfirmationScreen}
              />
              <Route
                exact
                path='/calendarselectedtimes'
                component={CalendarSelectedTimes}
              />
            </Switch>
          </main>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
