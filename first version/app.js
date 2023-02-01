
const container = document.querySelector("#container");
const showPlanetsBtn = document.querySelector("#showPlanetsBtn")
const showNextBtn = document.querySelector("#showNextPlanetsBtn")
showNextBtn.style.visibility = 'hidden';


// first 10 planets
fetch("https://swapi.dev/api/planets/?page=2")
   .then((response) => response.json())
   .then((data) => fetchPlanets(data));


const fetchPlanets = (data) => {
   const fetchedPLanets = data.results.forEach(element => {
      console.log(data.results);

      showPlanetsBtn.addEventListener("click", function () {
         container.innerHTML += `<div class="planet-div">
      <h2>Planet name: ${element.name}</h2>
      <h2>Population: ${element.population}</h2>
      <h2>Climate: ${element.climate}</h2>
      <h2>Gravity: ${element.gravity}</h2>
      </div>`
         showPlanetsBtn.style.visibility = 'hidden';
         showNextBtn.style.visibility = 'visible';
      })
   });
}

// next 10 planets
fetch("https://swapi.dev/api/planets/?page=3")
   .then((response) => response.json())
   .then((data3) => fetchNextPlanets(data3));

const fetchNextPlanets = (data3) => {
   showNextBtn.addEventListener("click", function () {
      const isClicked = true;
      container.innerHTML = "";
      const fetchedNextPLanets = data3.results.forEach(element => {


         container.innerHTML += `<div class="planet-div">
         <h2>Planet name: ${element.name}</h2>
         <h2>Population: ${element.population}</h2>
         <h2>Climate: ${element.climate}</h2>
         <h2>Gravity: ${element.gravity}</h2>
         </div>`
         if (isClicked) {
            showPlanetsBtn.style.visibility = 'visible';
            showPlanetsBtn.innerText = 'Show previous 10 Planets'
            showNextBtn.style.visibility = 'hidden';

         }else{}
      })
   });

}