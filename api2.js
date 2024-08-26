const daysoftheweek=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const time2=document.getElementById('time');
const temperature=document.getElementById('temp');
const date2=document.getElementById('date');
const months=['January','February','March','April','May','June','July','August','September','October','November','December']
const image=document.querySelector(".weatherimage")
const wt=document.querySelector(".weathertype");

let timezoneOffset = 0;
setInterval(() => {
    const curr= new Date((new Date().getTime() + timezoneOffset * 1000));
    const mon=curr.getMonth();
    const date3=curr.getDate();
    const date=curr.getDay();
    var hour=curr.getHours();
    hour= hour < 10 ? "0" + hour : hour;
    var minutes = curr.getMinutes();
    const ampm= hour <= 12? 'AM' : 'PM'
    minutes= minutes <10 ? "0" + minutes : minutes;

    time2.innerHTML = hour + ':' + minutes + ' ' + `<span id="amorpm">${ampm}</span>`
    date2.innerHTML=daysoftheweek[date] + ',' + ' ' + months[mon] + ' ' + date3
}, 1000);


const API= "9ba17e692e48cd7a99ee7bc07b9cb0c0";
const search = document.querySelector(".sea input");
const searchbutton=document.querySelector(".sea button");
async function getTemp(city){
    const ch= await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +`&units=metric&appid=${API}`);
    var d=await ch.json();
    console.log(d);
    document.querySelector(".city").innerHTML=d.name;
    
    temperature.innerHTML=Math.round(d.main.temp) + "&#176;C";
    
    if(d.weather[0].main=="Clear"){
        image.src='https://openweathermap.org/img/wn/01d@2x.png';
        wt.innerHTML="Clear";
    }
    else if(d.weather[0].main=="Clouds"){
        image.src='https://openweathermap.org/img/wn/03d@2x.png';
        wt.innerHTML="Clouds";
    }
    else if(d.weather[0].main=="Rain"){
        image.src='https://openweathermap.org/img/wn/10d@2x.png';
        wt.innerHTML="Rain";
    }
    else if(d.weather[0].main=="Mist"){
        image.src='https://openweathermap.org/img/wn/50d@2x.png';
        wt.innerHTML="Mist";
    }
    else if(d.weather[0].main=="Snow"){
        image.src='https://openweathermap.org/img/wn/13d@2x.png';
        wt.innerHTML="Snow";
    }
    else if(d.weather[0].main=="Thunderstorm"){
        image.src='https://openweathermap.org/img/wn/11d@2x.png';
        wt.innerHTML="Thunderstorm";
    }
    else if(d.weather[0].main=="Haze"){
        image.src='https://openweathermap.org/img/wn/50d@2x.png';
        wt.innerHTML="Haze";
    }
    else if(d.weather[0].main=="Drizzle"){
        image.src='https://openweathermap.org/img/wn/09d@2x.png';
        wt.innerHTML="Drizzle";
    }
}
searchbutton.addEventListener("click",() =>{
    getTemp(search.value);
})
