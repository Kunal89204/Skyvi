// Function to fetch weather data and update UI
function updateWeather(cityName) {
  const apiKey = 'bc6cdf98ec47468598142603231609';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Update UI elements with weather data
      document.querySelector(".city-name").textContent = data.location.name;
      document.getElementById("humidity").textContent = data.current.humidity;
      document.getElementById("wind-speed").textContent = data.current.wind_kph;
      document.querySelector(".temp").innerHTML = `${data.current.temp_c}<sup>o</sup>C`;

      const climate = data.current.condition.text;
      console.log(climate);

      // Update image based on weather condition
      const img = document.getElementById("image");
      if (climate.toLowerCase().includes("clear")) {
        img.src = "icons/clear.png";
      } else if (climate.toLowerCase().includes("sunny")) {
        img.src = "/icons/sun.png";
      } else if (climate.toLowerCase().includes("partly cloudy")) {
        img.src = "/icons/partly-cloudy.png";
      } else if (climate.toLowerCase().includes("snow")) {
        img.src = "/icons/snowman.png";
      } else if (climate.toLowerCase().includes("cloud")) {
        img.src = "/icons/cloudy.png";
      } else if (climate.toLowerCase().includes("mist")) {
        img.src = "/icons/mist.png";
      }
    })
    .catch((error) => {
      console.log("There was an error:", error);
      const errorbox = document.querySelector(".error");
      errorbox.style.opacity = "1";

      setTimeout(() => {
        errorbox.style.opacity = "0";
      }, 2000);
    });
}

// Function to handle the search button click
function handleSearch() {
  const input = document.getElementById("input").value.trim();
  if (input !== "") {
    updateWeather(input);
  } else {
    console.log("the input field can't be empty");
    const emptyBox = document.querySelector(".empty-box");
    emptyBox.style.opacity = "1";

    setTimeout(() => {
      emptyBox.style.opacity = "0";
    }, 2000);
  }
}

// Call the function to fetch weather data for a default location when the page loads
window.addEventListener("load", function () {
  const defaultCity = "India"; // You can set your desired default city
  updateWeather(defaultCity);
});

// Attach the handleSearch function to the search button click event
document.getElementById("search").addEventListener("click", handleSearch);