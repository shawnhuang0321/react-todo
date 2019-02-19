import React, { Component } from 'react';

// react-router-dom
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// components
import Home from './components/Home';
// import TodoList from './components/TodoList';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todolist">TodoList</NavLink>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/todolist" component={VisibleTodoList}></Route>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
