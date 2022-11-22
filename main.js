import "./style.css";

document.getElementById("ciudad").addEventListener("change", handleChangeCity);

async function handleChangeCity(event) {
  // event.preventDefault()
  const city = event.target.value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8792a3f70amsh826c6667d9c8447p19dedcjsn08eb0332b572',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
  const data = await response.json()
  console.log(data)
  document.getElementById('tiempo').innerHTML = data.current.temp_c + 'ºC'
  document.getElementById('sol').innerHTML = data.current.condition.text

  document.getElementById('hoy').innerHTML = data.forecast.forecastday[0].day.avgtemp_c + 'ºC'
  document.getElementById('tiempo0').innerHTML = data.forecast.forecastday[0].day.condition.text

  document.getElementById('manhana').innerHTML = data.forecast.forecastday[1].day.avgtemp_c + 'ºC'
  document.getElementById('tiempo1').innerHTML = data.forecast.forecastday[1].day.condition.text
  
  document.getElementById('pasado').innerHTML = data.forecast.forecastday[2].day.avgtemp_c + 'ºC'
  document.getElementById('tiempo2').innerHTML = data.forecast.forecastday[2].day.condition.text      
}
