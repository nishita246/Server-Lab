// Date Object
function displayDateTime() {
    let now = new Date();
    let dateTimeString = "Current Date and Time: " + now.toLocaleString();
    document.getElementById("dateTimeDisplay").textContent = dateTimeString;
  }
  [cite, 14]
  
  // Math Object
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  [cite, 14]
  
  // AJAX (Fetch Weather Data)
  function fetchWeatherData(city) {
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Use metric or imperial
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherDisplay").textContent = "Could not retrieve weather data.";
      });
  }
  
  function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const weatherHTML = `
      <h2>Weather in ${name}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;
    document.getElementById("weatherDisplay").innerHTML = weatherHTML;
  }
  
  // Example usage:
  fetchWeatherData("London"); // You can replace "London" with a user-entered city
  [cite, 15]