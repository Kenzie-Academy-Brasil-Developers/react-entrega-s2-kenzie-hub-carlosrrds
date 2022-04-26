import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashbord from "../Pages/Dashbord";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route exact path="/register/">
        <Register />
      </Route>
      <Route exact path="/home/:user_id">
        <Dashbord auth={auth} setAuth={setAuth} />
      </Route>
    </Switch>
  );
};

export default Routes;
