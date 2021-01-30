import { Route } from 'react-router-dom';
import Dashboard from './components/Welcome/Dashboard';
import Success from './components/Success/Success';
import ScheduleAvailableDays from './components/ScheduleAvailableDays/ScheduleAvailableDays';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Route exact path='/' component={Dashboard} />
        <Route path='/success' component={Success} />
        <Route path='/schedule' component={ScheduleAvailableDays} />
      </ThemeProvider>
    </>
  );
}

export default App;
