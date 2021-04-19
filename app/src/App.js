import { Route } from 'react-router-dom';
import Dashboard from './components/Welcome/Dashboard';
import Success from './components/Success/Success';
import ScheduleAvailableDays from './components/ScheduleAvailability/ScheduleAvailability';
import ScheduleAvailableTimes from './components/ScheduleAvailability/ScheduleAvailableTimes';
import SuccessScreenTwo from './components/Success/SuccessScreenTwo';
import MeetingTypes from './components/MeetingTypes/MeetingTypes';
import Preferences from './components/Preferences/Preferences';
import ReviewPreferences from './components/Preferences/ReviewPreferences';
import CalendarView from './components/Scheduling/CalendarView';
import Prompt from './components/Scheduling/Prompt';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/success-screen-two' component={SuccessScreenTwo} />
        <Route exact path='/scheduledays' component={ScheduleAvailableDays} />
        <Route exact path='/scheduletimes' component={ScheduleAvailableTimes} />
        <Route exact path='/meetingtypes' component={MeetingTypes} />
        <Route exact path='/preferences' component={Preferences} />
        <Route exact path='/review-preferences' component={ReviewPreferences} />
        <Route exact path='/prompt' component={Prompt} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Route exact path='/calendarview' component={CalendarView} />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
