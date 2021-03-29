import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Home from "../components/Home";
import SignUp from "../components/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={SignUp} />

      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
}
