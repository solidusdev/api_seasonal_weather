import React, { Component, Fragment } from "react";

class NewYorkWeather extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            text: []
        }
    }

    componentDidMount() {

        fetch("https://apidev.accuweather.com/currentconditions/v1/14-349727_1_AL.json?language=en&apikey=hoArfRosT1215")
        .then(results => {
            return results.json();
        }).then(data => {
     
            let text = data.map((element, i) => {
                
                return (
                    
                    <div id="inner" key={i}>
                    
                        <p>Time of the Day: 
                            {
                                element["IsDayTime"] === true ? " Day Time" : " Night Time"
                            }
                        </p>

                        <p>{`Weather: ${element["WeatherText"]}`}</p>
                        
                        <p> 
                            {
                                `Temperature: ${element["Temperature"]["Imperial"]["Value"]}°F /
                                ${Math.floor(element["Temperature"]["Metric"]["Value"])}°C` 
                            }
                        </p>
                        
                        {
                            element["HasPrecipitation"] === true ? 
                            
                            <Fragment>
                                <p>Precipitation: Yes ({element["PrecipitationType"]})</p> 
                            </Fragment>
                                
                            : <p>Precipitation: None</p>
                        }

                    </div>
                );
            });
            
            this.setState({text});
        });
    }
    
    render() {
        return (
            <Fragment>
                
                <div id="nyc-weather">
                    
                    <div id="main-container">
                        
                        <div id="outter">
                            
                            <h1>Current Weather in New York</h1>

                            {/* div of "inner" inside of text state */}
                            {this.state.text} 
                        
                        </div>
                    
                    </div>

                    <div className="leaves-container">
                        <div> <img src={require("../assets/images/leaves/leaves1.png")} alt="a leaf" /></div>
                        <div> <img src={require("../assets/images/leaves/leaves2.png")} alt="a leaf" /></div>
                        <div> <img src={require("../assets/images/leaves/leaves3.png")} alt="a leaf" /></div>
                        <div> <img src={require("../assets/images/leaves/leaves4.png")} alt="a leaf" /></div>
                        <div> <img src={require("../assets/images/leaves/leaves1.png")} alt="a leaf" /></div>
                        <div> <img src={require("../assets/images/leaves/leaves2.png")} alt="a leaf" /></div>
                        <div> <img src={require("../assets/images/leaves/leaves3.png")} alt="a leaf" /></div>
                        <div> <img src={require("../assets/images/leaves/leaves4.png")} alt="a leaf" /></div>
                    </div> 
                
                </div>
            
            </Fragment>
        )
    }
}

export default NewYorkWeather;