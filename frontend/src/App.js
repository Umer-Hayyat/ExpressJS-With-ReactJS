import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link,
  // useHistory,
  // useLocation
} from "react-router-dom";

import PrivateRoute from "./Auth/PrivateRoute";
import Login from "./Auth/Login";
import UsersList from "./Components/Users/UsersList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"></Redirect>
        </Route>
        <Route exact component={Login} path="/login"></Route>

        <PrivateRoute>
          <Route path="/users/all" component={UsersList} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
