import React from "react";
import NavBar from "./components/layout/navbar";
import store from "./store";
import { Provider } from "react-redux";
import Dashboard from "./components/posts/dashboard";
import CreateForm from "./components/posts/createForm";
import UpdateForm from "./components/posts/updateForm";

import {
  HashRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <div className="container">
              <NavBar />
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route exact path="/new" component={CreateForm}></Route>
                <Route path="/:edit" component={UpdateForm}></Route>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
export default App;
