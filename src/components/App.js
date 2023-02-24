import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

import { Movies, MovieInformation, NavBar, Profile, Actors } from "./";
//   / -> root -> all movie
//  /asd123 -> movie information -> more

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
