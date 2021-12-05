import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { actions } from '../../redux/action'
import './style.css'

function mapStateToProps(state) {
    return {
        favoriteCities: state.city.favoriteCities
    }

}

export default connect(mapStateToProps)(function FavoritesCities(props) {

    const { favoriteCities, dispatch } = props;

    useEffect(() => {
        dispatch(actions.getFavoritesCities());
    }, [])




    return (
        <div className="standartDiv">
            <h1>Favorite Cities: {favoriteCities}</h1>
        </div>
    );
});


