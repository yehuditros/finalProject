import axios from "axios";

export async function autocompleteCityApi(searchLetter) {
    try {
        let res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=7LMme2bBQoiKGBvSpwQUA7FCuTdQTZTG&q=${searchLetter}`)
        let cities = await res.json();
        return cities;
    } catch (error) {

    }

}

export async function getAllCitiesDb() {
    try {
        let res = await axios.get('https://localhost:44383/api/City/GetAllCities')
        let cities = res.data;
        return cities;
    } catch (error) {

    }
}

export async function addToAllCitiesDb(search) {

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ search})
    // };
    // fetch('https://localhost:44383/api/City/AddToSearch', requestOptions)
    // .then(response => response.json())
    // .then(data => setPostId(data.id));
    // let s = search.searchLetters;
    // let l= search.cities.map(t=>t.label);
    // let k= search.cities.map(t=>t.key);
    try {
        axios.post(`https://localhost:44383/api/City/AddToSearch`, search);

    } catch (error) {

    }

}

export class Search {
    searchLetters;
    cities;

    // Search(s,c){
    //     this.searchLetters =s;
    //     this.cities = c;
    // }

    // Search(){

    // }

}


export class Result {
    label;
    key;

    // Result(l,k){
    //     this.label=l;
    //     this.key=k;
    // }


}