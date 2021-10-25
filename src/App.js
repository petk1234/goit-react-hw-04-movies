import React from "react";
import { Component } from "react";
import { Switch, Redirect, Route, Link } from 'react-router-dom';
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import MovieDetailedPage from "./components/MovieDetailedPage";
import Navigation from "./components/Navigation";
import routes from "./routes";
// import serverResp from "./services/webServer.js"
export default class App extends Component{
  state ={
  }

  render(){
    return(
      <>
          <Navigation />
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movies} exact component={MoviesPage} />
            <Route path={routes.moviePage} component={MovieDetailedPage} />
            <Redirect to="/" />
           </Switch>
      </>
    )
  }
}
