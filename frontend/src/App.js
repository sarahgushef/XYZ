import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import ReduxThunk from 'redux-thunk';
import reducers from "./reducers";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

//=======================================
import Header from './components/Header';

// =======================================
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import WritingArea  from './pages/WritingArea';




class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <div>
          <Header/>

          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Login" component={Login}/>
            <Route path="/WritingArea" component={WritingArea}/>
          </div>
        </div>
      </Provider> 
    );
  }
}

export default App;
