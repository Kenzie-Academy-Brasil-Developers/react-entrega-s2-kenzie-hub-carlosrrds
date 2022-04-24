import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import { useState } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Switch>
      <Route exact>
        <Login auth={auth} setAuth={setAuth} />
      </Route>
    </Switch>
  );
};

export default Routes;
