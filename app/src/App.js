import { Route } from 'react-router-dom';
import Dashboard from './components/Welcome/Dashboard';
import Success from './components/Success/Success';
import ScheduleAvailableDays from './components/ScheduleAvailability/ScheduleAvailability';
import ScheduleAvailableTimes from './components/ScheduleAvailability/ScheduleAvailableTimes';
import SuccessScreenTwo from './components/Success/SuccessScreenTwo';
import MeetingTypes from './components/MeetingTypes/MeetingTypes';
import Preferences from './components/Preferences/Preferences';
import Prompt from './components/Scheduling/Prompt';
import ReviewPreferences from './components/Preferences/ReviewPreferences';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

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
        <Route exact path='/prompt' component={Prompt} />
        <Route exact path='/review-preferences' component={ReviewPreferences} />
      </ThemeProvider>
    </>
  );
}

export default App;
