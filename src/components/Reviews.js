import React from "react";
import { Component } from "react";
import serverResp from '../services/webServer.js';
import ReviewsEl from "./ReviewsEl.js";
export default class Reviews extends Component{
    state ={
        reviews: [],
    }

    componentDidMount(){
        serverResp.serverRespFilmReviews(this.props.match.params.movieId).then( data =>{
            this.setState({
                reviews: data.results,
            })
            console.log(data);
        })
    }

    render(){
        let { reviews } = this.state;
        return (
          <>
            <p>It's reviews page</p>
            {reviews.length > 0 &&
              <ReviewsEl
                 reviews = {reviews}
              />
            }
          </>  
        )
    }
}