
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];



function weatherInfo() {

    document.querySelector(".weather-info").style.display = "flex";
    document.querySelector(".hr1").style.display = "flex";
    document.querySelector(".hr2").style.display = "flex";



    const cityName = document.querySelector("input").value;
    document.querySelector(".none").style.display = "none";


    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6d756641e34948d4aaea1ef1a9545977&mode=htmls&units=metric`,
        success: function (data) {
            console.log(555);


            if (data.dt < data.sunset) {
              document.querySelector(".weather-info").src= "img/sunny.jpg";
                // color white
            } else {
                console.log("no")
                // orange background
                // color black
            }

            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp > span ").innerHTML = Math.round( data.main.temp);
            document.querySelector(".description").innerHTML =data.weather[0].main;
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);


        },

        error: function (err) {
            console.log(err);
        }
    })





// function weatherDaysInfo() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=6d756641e34948d4aaea1ef1a9545977&units=metric`,

        success: function (data) {
            console.log("223");
            console.log(data.list[0].name)


    // document.querySelector(".none").style.display = "none";

    document.querySelector(".day1").style.display = "flex";
    document.querySelector(".day2").style.display = "flex";
    document.querySelector(".day3").style.display = "flex";
    document.querySelector(".day4").style.display = "flex";
    document.querySelector(".day5").style.display = "flex";

            // if (data.dt < data.sunset) {
            //   document.querySelector(".weather-info").src= "img/sunny.jpg";
            //     // color white
            // } else {
            //     console.log("no")
            //     // orange background
            //     // color black
            // }

            document.querySelector(".city1").innerHTML = data.city.name;
            document.querySelector(".city2").innerHTML = data.city.name;
            document.querySelector(".city3").innerHTML = data.city.name;
            document.querySelector(".city4").innerHTML = data.city.name;
            document.querySelector(".city5").innerHTML = data.city.name;

            document.querySelector(".temp1 > span ").innerHTML = Math.round(data.list[0].main.temp);
            document.querySelector(".temp2 > span ").innerHTML = Math.round(data.list[8].main.temp);
            document.querySelector(".temp3 > span ").innerHTML = Math.round(data.list[16].main.temp);
            document.querySelector(".temp4 > span ").innerHTML = Math.round(data.list[24].main.temp);
            document.querySelector(".temp5  > span ").innerHTML = Math.round(data.list[32].main.temp);

            document.querySelector(".description1").innerHTML = data.list[0].weather[0].main;
            document.querySelector(".description2").innerHTML = data.list[8].weather[0].main;
            document.querySelector(".description3").innerHTML = data.list[16].weather[0].main;
            document.querySelector(".description4").innerHTML = data.list[24].weather[0].main;
            document.querySelector(".description5").innerHTML = data.list[32].weather[0].main;
            document.querySelector(".temp-range1>.max").innerHTML = Math.round(data.list[0].main.temp_max);
            document.querySelector(".temp-range1>.min").innerHTML = Math.round(data.list[0].main.temp_min);
            document.querySelector(".temp-range2>.max").innerHTML = Math.round(data.list[8].main.temp_max);
            document.querySelector(".temp-range2>.min").innerHTML = Math.round(data.list[8].main.temp_min);
            document.querySelector(".temp-range3>.max").innerHTML = Math.round(data.list[16].main.temp_max);
            document.querySelector(".temp-range3>.min").innerHTML = Math.round(data.list[16].main.temp_min);
            document.querySelector(".temp-range4>.max").innerHTML = Math.round(data.list[24].main.temp_max);
            document.querySelector(".temp-range4>.min").innerHTML = Math.round(data.list[24].main.temp_min);
            document.querySelector(".temp-range5>.max").innerHTML = Math.round(data.list[32].main.temp_max);
            document.querySelector(".temp-range5>.min").innerHTML = Math.round(data.list[32].main.temp_min);


        },

        error: function (err) {
            console.log(err);
        }
    });
}
// }


