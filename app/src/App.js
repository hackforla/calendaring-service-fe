import { Route } from 'react-router-dom';
import Dashboard from './components/Welcome/Dashboard';
import Success from './components/Success/Success';

function App() {
  return (
    <>
      <Route path='/' component={Dashboard} />
      <Route path='/success' component={Success} />
    </>
  );
}

export default App;
