import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { connect } from 'react-redux';
import { actions } from '../../redux/action'
import { autocompleteCityApi, getAllCitiesDb, addToAllCitiesDb, Result, Search } from '../../functions/getFromApi'
import './style.css'




function mapStateToProps(state) {
    return {
    }

}



export default connect(mapStateToProps)(function CountrySelect(props) {
    const { dispatch } = props;

    const [searchLetter, setSearchLetter] = useState('');
    const [currentCities, setCurrentCities] = useState([]);
    const [allCities, setAllCities] = useState([])

    useEffect(async () => {
        //db
        // let cities = await getAllCitiesDb();
        // setAllCities(cities);
        // dispatch(actions.geTodaysWeathers());
    }, [])



    async function selectCity(e) {
        try {
            dispatch(actions.setSelectedCity({ "city": e.label }));
            dispatch(actions.getCurrentWeather(e.key))
        }
        catch (err) {

        }
    }

    function autocompleteCity(value) {
        setSearchLetter(value)

    }

    useEffect(async () => {
        try {
            if (searchLetter == '')
                return;
            let cities = allCities.find(v => v.searchLetters == searchLetter)
            if (cities) {
                setCurrentCities(cities.cities)
                return
            }
            if(currentCities&&currentCities.length==0&&searchLetter.length>1){
                return;
            }
            cities = await autocompleteCityApi(searchLetter)
            let c = cities.map(v => {
                let r = new Result();
                r.label = v.LocalizedName;
                r.key = v.Key;
                // return new Result(v.LocalizedName, v.Key)
                return r;
            })
            //store
            setAllCities([...allCities, { "searchLetters": searchLetter, "cities": c }])
            let s = new Search();
            s.searchLetters = searchLetter;
            s.cities = c;
            // addToAllCitiesDb(s);
            //
            setCurrentCities(c)
        }
        catch (err) {
            console.log(err);

        }

    }, [searchLetter])



    return (
        <div className="standartDiv">
            <div className="selectDiv" >
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={"select a city"}
                    onChange={(e) => { selectCity(e) }}
                    isSearchable={true}
                    name="city"
                    options={currentCities}
                    onInputChange={autocompleteCity}
                />
            </div>
        </div>
    );
});


