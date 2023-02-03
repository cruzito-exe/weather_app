import React, {useState} from 'react';

const Form = ({newLocation}) => {
 const [city, setCity] = useState('San Salvador');

 const onSubmit = (event) => {
  console.log({city});

  if(city === '' || !city) return;
  newLocation(city);

  event.preventDefault();
 }

 return (
  <div className='container'>
   <form onSubmit={onSubmit}>
    <div className='input-group mb-3 mx-auto'>
     <input className='form-control' type='text' placeholder='País/Ciudad' onChange={(event) => setCity(event.target.value)}/>
     <button className="btn btn-primary input-group-text" type='submit'> Buscar </button>
    </div>
   </form>
  </div>
 );
}

export default Form;