import './App.css';
import { Provider } from 'react-redux';
import SearchCity from './components/searchCity';
import FavoritesCities from './components/favoriteCities';
import GetCurrentWeather from './components/getCurrentWeather';
import store from './redux/store';
function App() {
  return (
    <div className="mainDiv">
      <Provider store={store}>
        <FavoritesCities />
        <SearchCity />
        <GetCurrentWeather />
      </Provider>
    </div>
  );
}

export default App;


