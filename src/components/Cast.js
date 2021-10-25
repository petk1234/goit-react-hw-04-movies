import React from "react";
import { Component } from "react";
import serverResp from "../services/webServer.js";
import CastEl from "./CastEl.js";
export default class Cast extends Component{
    state ={
        casts: [],
    }
    componentDidMount(){
        serverResp.serverRespFilmCast(this.props.match.params.movieId).then( data =>{
            this.setState({
                casts: data.cast,
            })
            console.log(data.cast);
        })
    }
    render(){
        let { casts } = this.state;
        return (
          <>
            <p>It's cast page</p>
            <CastEl
               casts = {casts}
            />
          </>
        )
    }
}