  const apiKey="Your api Key";
          const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
          const searchBox= document.querySelector(".search input");
          const searchBtn= document.querySelector(".search button");
          async function todaysWeather(city)
          {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data= await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °c" ;
            document.querySelector(".humid").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed+ " km/h";
            document.querySelector(".sl").innerHTML=data.main.sea_level+ "mtr";
      
          }
          searchBtn.addEventListener("click", ()=>{
            todaysWeather(searchBox.value);
          })
