import "./style.css";

document.getElementById("ciudad").addEventListener("change", obtainClimate);

function obtainClimate() {
  const city = document.querySelector("#ciudad").value;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8792a3f70amsh826c6667d9c8447p19dedcjsn08eb0332b572',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      document.getElementById('tiempo').innerHTML = response.current.temp_c + 'ºC'
      document.getElementById('sol').innerHTML = response.current.condition.text
      document.getElementById('manhana').innerHTML = response.forecast.forecastday[1].day.avgtemp_c + 'ºC'
      document.getElementById('tiempo1').innerHTML = response.forecast.forecastday[1].day.condition.text
      document.getElementById('pasado').innerHTML = response.forecast.forecastday[2].day.avgtemp_c + 'ºC'
      document.getElementById('tiempo2').innerHTML = response.forecast.forecastday[2].day.condition.text      
    })
    .catch(err => console.error(err));
}
