import React from "react";
import { Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import "../src/App.css"
import loginForm from "../src/components/loginForm/LoginForm"
import RegistrationForm from "./components/registrationForm/RegistrationForm"
import Home from "../src/pages/Home";
import Profile from "../src/components/profile/Profile";
import NotFound from "./pages/NotFound";
import MessageFeed from "./components/messages/MessageFeed"



class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Switch>
        <Route
          exact
          path="/home"
          component={Home}
        />
         <Route
         exact
         path="/messagefeed"
         component={MessageFeed} //Doesnt need a page (I think) redirected to middle column grid in profile page.
         />
        <Route
          exact
          path="/Registration"
          component={RegistrationForm}
        />
        <Route
          exact
          path="/login"
          component={loginForm}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
      </div>
    );
  }
}

export default App;
