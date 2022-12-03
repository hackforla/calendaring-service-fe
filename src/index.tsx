import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './utils/redux/store';
import { Provider as ReduxProvider } from 'react-redux';

// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
// root.render(
//   <ReduxProvider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </ReduxProvider>
// );

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);
