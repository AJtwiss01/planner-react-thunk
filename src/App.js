import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'


class App extends Component {
  state = {
    
  }
  render() {
    return (
      <Router>
        <div className="app">
        <NavBar />
         <Route path="/" exact component={Dashboard} />
         <Route path="/project/:id"  component={ProjectDetails} />
         <Route path="/SignIn" exact component={SignIn}/>
         <Route path="/SignUp" exact component={SignUp}/>
         <Route path="/Create" exact component={CreateProject}/>

        <Switch>
          
        </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
