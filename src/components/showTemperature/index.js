import './style.css'
import React, { useEffect, useState } from "react";


export default function ShowTemperature(props) {
    console.log(props.detail);


    return (
        <div>
            <h3>{props.title}</h3>

            <h5>  value: {props.detail && props.detail.Value}</h5>
            <h5>  Unit: {props.detail && props.detail.Unit}</h5>
            <h5>   UnitType: {props.detail && props.detail.UnitType}</h5>

        </div>
    );
}
