import React, { useEffect, useContext } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubContext from './context/github/githubContext';
import AlertState from './context/alert/AlertState';

const App = () => {
  const githubContext = useContext(GithubContext);
  // set alert message
  useEffect(() => {
    githubContext.fetchInitialUsers();
  }, []);

  return (
    <AlertState>
      <Router>
        <div className='App'>
          <Navbar title='Github-Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />

              <Route path='/about'>
                <About />
              </Route>

              <Route path='/user/:login' component={User} />

              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  );
};

export default App;
