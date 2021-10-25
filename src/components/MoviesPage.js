import React from "react";
import { Component } from "react";
import serverResp from '../services/webServer.js';
import { Link } from 'react-router-dom';
import getParamsFromQuery from "../utils/getParamsFromQuery.js";
export default class MoviesPage extends Component{
    state ={
        input: '',
        films: [],
    }
    componentDidMount(){
        let {movie} = getParamsFromQuery(this.props.location.search);
        //console.log(params);
        console.log(movie);
        if(movie){
            serverResp.serverRespFilm(movie).then( data =>{
                this.setState({
                    films: data.results,
                })
            })
        }
    } 
    componentDidUpdate(){
        let params = getParamsFromQuery(this.props.location.search);
        console.log('it is me sucker',params);
    }
    handleChange = e =>{
        this.setState({
            input: e.target.value,
        })
    }
    handleClick = () =>{
        console.log(this.state.input);
        if(this.state.input !== ''){
          serverResp.serverRespFilm(this.state.input).then( data =>{
               this.setState({
                   films: data.results,
               })
          this.props.history.push({
              pathname: this.props.history.pathname,
              search: `movie=${this.state.input}`
          })
            //   console.log(data);
          });
        }
    }
    render(){
        let { input, films } = this.state;
        return (
           <> 
            <p>It's movies page</p>
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.handleClick}>Find</button>
            {films.length > 0 &&(
                <ul>
                    {films.map( film =>(
                        <li key={film.id}>
                            <Link to={`${this.props.match.url}/${film.id}`}>{film.title}</Link>
                        </li>
                    ))}
                </ul>
            )
            }        
           </>
        )
    }
}