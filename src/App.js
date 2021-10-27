import React from "react";
import { Component, lazy, Suspense } from "react";
import { Switch, Redirect, Route, Link } from 'react-router-dom';
// import HomePage from "./components/HomePage";
// import MoviesPage from "./components/MoviesPage";
// import MovieDetailedPage from "./components/MovieDetailedPage";
import Navigation from "./components/Navigation";
import routes from "./routes";
// import serverResp from "./services/webServer.js"
const HomePage = lazy( () => import("./components/HomePage" /* webpackChunkName: "HomePage" */)); 
const MoviesPage = lazy( () => import("./components/MoviesPage" /* webpackChunkName: "MoviesPage" */));
const MovieDetailedPage = lazy( () => import("./components/MovieDetailedPage" /* webpackChunkName: "MovieDetailedPage" */));  
export default class App extends Component{
  state ={
  }

  render(){
    return(
      <>
          <Navigation />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path={routes.home} exact component={HomePage} />
              <Route path={routes.movies} exact component={MoviesPage} />
              <Route path={routes.moviePage} component={MovieDetailedPage} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
      </>
    )
  }
}
