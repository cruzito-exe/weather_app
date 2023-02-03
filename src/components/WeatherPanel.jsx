import React, {useState} from "react";
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
 let openWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=0ca7fb8919814e59836c2f5d2c86d168&lang=es';
 let cityUrl = '&q=';
 let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=0ca7fb8919814e59836c2f5d2c86d168&lang=es';

 const [weather, setWeather] = useState([]);
 const [forecast, setForecast] = useState([]);
 const [loading, setLoading] = useState(false);
 const [show, setShow] = useState(false);
 const [location, setLocation] = useState('');

 const getLocation = async(loc) => {
  setLoading(true);
  setLocation(loc);

  //obtener datos de tiempo real

  openWeather = openWeather + cityUrl + loc;

  await fetch(openWeather).then((response) => {
   if(!response.ok) throw {response}
   return response.json();
  }).then((weatherData) => {
   if(weatherData.cod >= 400) {
    setWeather(false);
   } else {
    setWeather(weatherData);
    console.log(weatherData);
   }
  }).catch(error => {
   console.log(error);
   setLoading(error);
   setShow(false);
  });

  //obtener datos del forecast

  urlForecast = urlForecast + cityUrl + loc;

  await fetch(urlForecast).then((response) => {
   if(!response.ok) throw {response}
   return response.json();
  }).then((forecastData) => {
   setForecast(forecastData);
   console.log(forecastData);
   setLoading(false);
   setShow(true);
  }).catch(error => {
   console.log(error);
   setLoading(error);
   setShow(false);
  });
 }

 return (
  <React.Fragment>
   <Form newLocation={getLocation}/>
   <Card showData={show} loadingData={loading} weather={weather} forecast={forecast}/>
  </React.Fragment>
 );
}

export default WeatherPanel;