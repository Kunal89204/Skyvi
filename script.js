let input = document.getElementById("input").value.trim();
let search = document.getElementById("search")
let city = document.querySelector(".city-name")
let humidity = document.getElementById("humidity")
let speed = document.getElementById("wind-speed")
let temp = document.querySelector(".temp")


search.addEventListener("click", function(){
    if (search !== "") {
        apiUrl = `https://api.weatherapi.com/v1/current.json?key=bc6cdf98ec47468598142603231609&q=${input}`

fetch(apiUrl)
.then(respo => respo.json())
.then((data) => {




    city.textContent = data.location.name;
    humidity.textContent = data.current.humidity;
    speed.textContent = data.current.wind_kph
    temp.textContent = data.current.temp_c;
}).catch((error) =>{
    console.log("there was an error")
})



    }
})

