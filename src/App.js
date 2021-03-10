import React,{ Component } from 'react';
import Main from './components/Main';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
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
