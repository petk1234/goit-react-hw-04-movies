import React from "react";
import { Component } from "react";
import serverResp from "../services/webServer.js";
import HomePageInsertUl from "./HomePageInsertUl.js";
export default class HomePage extends Component{
    state ={
        trends: [],
    }
    componentDidMount = () =>{
        serverResp.serverRespListOfFilms('week').then( data =>{
          console.log(data.results);
          this.setState({trends: data.results})
        })
    }
    render(){
        let { trends } = this.state;
        return (
            <> 
            <p>It's home page</p>
            <HomePageInsertUl 
               trends = {trends}
               url = {this.props.match.url}
            />
            </>
        )
    }
}