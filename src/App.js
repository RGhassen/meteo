import { useState } from 'react';
function App() {
  const [place , setPlace] = useState('')
  const [placeInfo , setPlaceInfo] = useState({})

const handelSearch = () =>{ 
  fetch(`http://api.weatherapi.com/v1/current.json?key=705dde45941c4d13bef211202221505&q=${place}&aqi=no`)
  .then((response) => response.json())
  .then((data) => setPlaceInfo({
    name : data.location.name,
    country : data.location.country,
    time : data.location.localtime,
    temp : Math.round(data.current.temp_c) ,
    icon : data.current.condition.icon,
    text : data.current.condition.text}))
  setPlace('')
}

let tempT = `${placeInfo.temp} °C`


  return (
    
    <div className=" main" >
      <div className={placeInfo.temp>25 ? "app" : "app-cold"}>
        <div className='nav'>
          <h2 id='logo'>meteo</h2>
          <div className='input'>
            <input placeholder='search a city' onChange={(e)=> setPlace(e.target.value)} type='text' value={place}/>
            <button onClick={handelSearch}>search</button>
          </div>
         
          <h2 id='time'>{placeInfo.time}</h2>
        </div>


        <div className='info'>

          <section>
            <img src={placeInfo.icon}/>
            <h1 id='name'>{placeInfo.name}</h1>

          </section>

          <h2 id='country'>{placeInfo.country}</h2>
          <h2 id='temp'>{tempT == 'undefined °C' ? '' : tempT}</h2>
          <h2 id='text'>{placeInfo.text}</h2>

        </div>
   
      </div>
      
      
    </div>
  );
}

export default App;
