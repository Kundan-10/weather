
let api="029c92bf32f169fd511c3e1d6e4a3487";

async function getData(){
   
    let city = document.getElementById("city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
     
    // let iframe =document.getElementById("gmap_canvas")
    // iframe.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    
   let res= await fetch(url);
   
   let data = await res.json();
    append(data);
   console.log(data);
}


function append(data){
  console.log(data)
    let city = document.getElementById("city").value;
    let container = document.getElementById("container");
    container.innerHTML =null;
    let h3 =document.createElement("h3");
    h3.innerText =data.name;

    let p1 =document.createElement("p");
    p1.innerText =`Currunt temp: ${data.main.temp}`;

    let p2 =document.createElement("p");
    p2.innerText =`max temp: ${data.main.temp_max}`;

    let p3 =document.createElement("p");
    p3.innerText =`min temp: ${data.main.temp_min}`;

    let p4 =document.createElement("p");
    p4.innerText =`Wind speed: ${data.wind.speed}`;

    let p5 =document.createElement("p");
    p5.innerText =`Clouds all:☁️ ${data.clouds.all}`;

    let p6 =document.createElement("p");
    p6.innerText =`Sunrise:🌄 ${data.sys.sunrise}`;

    let p7 =document.createElement("p");
    p7.innerText =`Sunset:🌇 ${data.sys.sunset}`;


    container.append(h3,p1,p2,p3,p4,p5,p6,p7);

    let iframe =document.getElementById("gmap_canvas")
iframe.src =`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;



};


function getLocation() {

  navigator.geolocation.getCurrentPosition(success);

  function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getWhetherOnLocation(crd.latitude, crd.longitude);
  }
}


 async function getWhetherOnLocation(lat,lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=029c92bf32f169fd511c3e1d6e4a3487`;

    let res= await fetch(url);
    let data = await res.json();
    append(data);
    console.log(data);
 }

