let search = document.getElementById("search");
let city = document.querySelector(".city-name");
let humidity = document.getElementById("humidity");
let speed = document.getElementById("wind-speed");
let temp = document.querySelector(".temp");

search.addEventListener("click", function() {
  let input = document.getElementById("input").value.trim();
  if (input !== "") {
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=bc6cdf98ec47468598142603231609&q=${input}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        city.textContent = data.location.name;
        humidity.textContent = data.current.humidity;
        speed.textContent = data.current.wind_kph;
        temp.innerHTML = `${data.current.temp_c}<sup>o</sup>C`;
      })
      .catch((error) => {
        console.log("There was an error:", error);
      });
  }
});
