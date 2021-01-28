import { Route } from 'react-router-dom';
import Dashboard from './components/Welcome/Dashboard';
import Success from './components/Success/Success';
import ScheduleAvailableDays from './components/ScheduleAvailableDays/ScheduleAvailableDays';

function App() {
  return (
    <>
      <Route exact path='/' component={Dashboard} />
      <Route path='/success' component={Success} />
      <Route path='/schedule' component={ScheduleAvailableDays} />
    </>
  );
}

export default App;
