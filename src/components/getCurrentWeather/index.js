import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import { connect } from 'react-redux';
import './style.css'
import ShowTemperature from "../showTemperature";


function mapStateToProps(state) {
    return {
        selectedCity: state.city.selectedCity,
        weatherForecast: state.weather.weatherForecast
    }

}
export default connect(mapStateToProps)(function GetCurrentWeather(props) {
    const { selectedCity, weatherForecast } = props
    console.log(weatherForecast);
    return (
        <div className="standartDiv">
            {weatherForecast ? (
                <MDBContainer>
                    <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                        <MDBCardTitle> <h2>Weather Forecast For {selectedCity} for {weatherForecast && weatherForecast.Date}</h2></MDBCardTitle>
                        <MDBCardText>
                            <div>
                                <ShowTemperature title="Temperature Minimum" detail={weatherForecast.Temperature.Minimum} />
                                <ShowTemperature title="Temperature Maximum" detail={weatherForecast.Temperature.Maximum} />

                            </div>
                        </MDBCardText>
                        {/* <div>
                            <div>
                                <h3>Day</h3>
                                Icon:{weatherForecast && weatherForecast.Day.Icon}
                                IconPhrase:{weatherForecast && weatherForecast.Day.IconPhrase}
                                HasPrecipitation:{weatherForecast && weatherForecast.Day.HasPrecipitation}
                                PrecipitationType:{weatherForecast && weatherForecast.Day.PrecipitationType}
                                Unit:{weatherForecast && weatherForecast.Day.PrecipitationIntensity}

                            </div>
                            <div>
                                <h3>Night</h3>
                                Icon:{weatherForecast && weatherForecast.Night.Icon}
                                IconPhrase:{weatherForecast && weatherForecast.Night.IconPhrase}
                                HasPrecipitation:{weatherForecast && weatherForecast.Night.HasPrecipitation}
                                PrecipitationType:{weatherForecast && weatherForecast.Night.PrecipitationType}
                                Unit:{weatherForecast && weatherForecast.Night.PrecipitationIntensity}
                            </div>
                        </div> */}
                    </MDBCard>
                </MDBContainer>
            ) : ""}

        </div>
    );
});


