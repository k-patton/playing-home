import React, {Component} from "react";
import "./cityHero.scss"
import CityNav from "../cityNav/cityNav"; 
import routes from "../../routes";
import { withRouter } from "react-router-dom";



export class CityHero extends Component{
  
    onClick = () => {
        this.props.history.push(routes.landing); 
    }
    render(){
        const{city,image,imageStyle} = this.props; 
        let backgroundImage; 
        if(imageStyle){
            backgroundImage = `${imageStyle},url(${image})`
            console.log(backgroundImage); 
        }
        else{
            backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${image})`
        }
    return (
        <div className = "city-hero-container" style={{backgroundImage: backgroundImage}} >

            <div className = "city-hero-logo" onClick={this.onClick}>
                <img src= "./img/logo-small2.svg" alt="small logo"/>
            </div>
            <div className = "city-hero-title"> 
                {city}
            </div>
            <span className = "city-hero-nav">
                <CityNav></CityNav>
            </span>
        </div>
    );
    }
};

export default withRouter(CityHero);