import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { HashRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Main />
      </HashRouter>
    );
  }
}
export default App;
