import React from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {
 var today = new Date();
 var day = today.getDate();
 var month = today.getMonth()+1;
 var year = today.getFullYear();

 if(day <= 9) {
  day = '0'+day;
 } if(month <= 9) {
  month = '0'+month;
 }

 var date = day+'/'+month+'/'+year;

 var url = '';
 var iconUrl = '';

 var iconUrl3H = '';
 var iconUrl3H = '';
 var iconUrl6H = '';
 var iconUrl9H = '';

 var forecastDate3H = '';
 var forecastDate6H = '';
 var forecastDate9H = '';

 if(loadingData) {
  return <Spinner/>;
 }

 if(showData) {
  url = 'http://openweathermap.org/img/w/';
  iconUrl = url+weather.weather[0].icon+'.png';

  iconUrl3H = url+forecast.list[1].weather[0].icon+'.png';
  iconUrl6H = url+forecast.list[2].weather[0].icon+'.png';
  iconUrl9H = url+forecast.list[3].weather[0].icon+'.png';

  var forecastDate3H = forecast.list[1].dt_txt.substring(8, 10)+'/'+forecast.list[1].dt_txt.substring(5, 7)+'/'+forecast.list[1].dt_txt.substring(0, 4)+' - '+forecast.list[1].dt_txt.substring(11, 13);
  var forecastDate6H = forecast.list[2].dt_txt.substring(8, 10)+'/'+forecast.list[2].dt_txt.substring(5, 7)+'/'+forecast.list[2].dt_txt.substring(0, 4)+' - '+forecast.list[2].dt_txt.substring(11, 13);
  var forecastDate9H = forecast.list[3].dt_txt.substring(8, 10)+'/'+forecast.list[3].dt_txt.substring(5, 7)+'/'+forecast.list[3].dt_txt.substring(0, 4)+' - '+forecast.list[3].dt_txt.substring(11, 13);

 }

 return (
  <div className='mt-5'>
   {
    showData === true ? (
     <div className='container'>
      <div className='card mb-3 mx-auto bg-dark text-white'>
       <div className='row g-0'>
        <div className='col-md-4'>
         <h3 className='card-title'> {weather.name} </h3>
         <p className='card-date'> {date} </p>
         <h1 className='card-temperature'> {(weather.main.temp - 273.15).toFixed(1)} ºC </h1>
         <p className='card-description'> <img src={iconUrl} alt='icon'/> {weather.weather[0].description} </p>
         <img className='img-fluid rounded-start' src='https://images.pexels.com/photos/2793175/pexels-photo-2793175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='...'/>
        </div>
        <div className='col-md-8'>
         <div className='card-body text-start mt-2'>
          <h5 className='card-text'> <i class="fas fa-fire-alt"> </i> Temperatura máx.: <span> {(weather.main.temp_max - 273.15).toFixed(1)} ºC </span> </h5>
          <h5 className='card-text'> <i class="fas fa-snowflake"> </i> Temperatura min.: <span> {(weather.main.temp_min - 273.15).toFixed(1)} ºC </span> </h5>
          <h5 className='card-text'> <i class="fas fa-mitten"> </i> Sensación térmica: <span> {(weather.main.feels_like - 273.15).toFixed(1)} ºC </span> </h5>
          <h5 className='card-text'> <i class="fas fa-tint"> </i> Humedad: <span> {weather.main.humidity}% </span> </h5>
          <h5 className='card-text'> <i class="fas fa-wind"> </i> Velocidad del viento: <span> {weather.wind.speed} m/s </span> </h5>
         </div>
         <hr/>
         <div className='row mt-4'>
          <div className='col'>
           <p className='hour'> {forecastDate3H}h </p>
           <p className='description'> <img src={iconUrl3H} alt='...'/> {forecast.list[1].weather[0].description} </p>
           <p className='temperature'> {(forecast.list[1].main.temp - 273.15).toFixed(1)} ºC </p>
          </div>
          <div className='col'>
           <p className='hour'> {forecastDate6H}h </p>
           <p className='description'> <img src={iconUrl6H} alt='...'/> {forecast.list[2].weather[0].description} </p>
           <p className='temperature'> {(forecast.list[2].main.temp - 273.15).toFixed(1)} ºC </p>
          </div>
          <div className='col'>
           <p className='hour'> {forecastDate9H}h </p>
           <p className='description'> <img src={iconUrl9H} alt='...'/> {forecast.list[3].weather[0].description} </p>
           <p className='temperature'> {(forecast.list[3].main.temp - 273.15).toFixed(1)} ºC </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    ):(
    <h2 className='text-white'> No se encontraron datos </h2>
    )
   }
  </div>
 );
}

export default Card;