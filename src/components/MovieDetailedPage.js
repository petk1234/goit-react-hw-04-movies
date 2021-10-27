import React from "react";
import { Component, lazy, Suspense } from "react";
import {Route, Link } from 'react-router-dom';
import serverResp from "../services/webServer.js";
// import Cast from "./Cast";
// import Reviews from "./Reviews";
import routes from "../routes.js";

const Cast = lazy( () => import('./Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy( () => import('./Reviews' /* webpackChunkName: "Reviews" */));
export default class MovieDetailedPage extends Component{
    state ={
        imggg: '',
        title: '',
        overview: '',
        genres: [],
    }
    componentDidMount(){
        serverResp.serverRespFilmInfo(this.props.match.params.movieId).then( data =>{
            this.setState(prevState =>({
                imggg: data.backdrop_path,
                title: data.title,
                overview: data.overview,
                genres: data.genres,
            }))
            console.log(data.genres);
        })
        .catch( error =>{
            console.log('Suck');
        })
    }
    render(){
        let { imggg, title, overview, genres } = this.state;
        console.log(genres);
        return (
            <>
               <p>It's movie detailed page</p>
               <img src={`https://image.tmdb.org/t/p/original${imggg}`} alt={title} width='500' height='300'/>
               <h1>{title}</h1>
               <h1>Overview</h1>
               <p>{overview}</p>
               <h1>Genres</h1>
               {genres !== undefined &&(
               <ul>
                {genres.map( (genre, i) =>(
                    <li key={genre.id}>{genre.name},</li>
                ))}
               </ul>
               )
               }
               <ul>
                 <li>
                   <Link to={`${this.props.match.url}/cast`}>Cast</Link>
                 </li>
                 <li>
                   <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
                 </li>
                </ul>
                <Suspense fallback={<h1>loading222....</h1>}>
                  <Route path={routes.cast} exact component={Cast} />
                  <Route path={routes.reviews} exact component={Reviews} />
                </Suspense>
            </>
        )
    }
}