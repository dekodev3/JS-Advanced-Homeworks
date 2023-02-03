// Homework #1 AdvancedJS  --- map method
const container = document.querySelector("#container");
const table = document.querySelector("#main-table")
const showPlanetsBtn = document.querySelector("#showPlanetsBtn")
const showNextBtn = document.querySelector("#showNextBtn")
const tableHead = document.querySelector('#tableHead')
const tableBody = document.querySelector('#tableBody')
showNextBtn.style.visibility = 'hidden';
table.style.visibility = 'hidden';


// first 10 planets
fetch("https://swapi.dev/api/planets/?page=2")
   .then((response) => response.json())
   .then((data) => fetchPlanets(data));

const fetchPlanets = (data) => {
   showPlanetsBtn.addEventListener("click", function () {
      tableHead.innerHTML = '';
      tableBody.innerHTML = '';
      tableHead.innerHTML = `<td>Planet Name</td><td>Population</td><td>Climate</td><td>Gravity</td></tr>`
      fetchedPLanets = data.results.map(element => {
         tableBody.innerHTML += `
      <tr>
      <td>${element.name}</td>
      <td>${element.population}</td>
      <td>${element.climate}</td>
      <td>${element.gravity}</td>
      </tr>`
         showPlanetsBtn.style.visibility = 'hidden';
         showNextBtn.style.visibility = 'visible';
         table.style.visibility = 'visible';
      })
   });
}
// next 10 planets
fetch("https://swapi.dev/api/planets/?page=3")
   .then((response) => response.json())
   .then((data3) => fetchNextPlanets(data3));
const fetchNextPlanets = (data3) => {
   showNextBtn.addEventListener("click", function () {
      tableHead.innerHTML = '';
      tableBody.innerHTML = '';
      tableHead.innerHTML = `<td>Planet Name</td><td>Population</td><td>Climate</td><td>Gravity</td></tr>`
      fetchedPLanets = data3.results.map(element => {
         tableBody.innerHTML += `
      <tr>
      <td>${element.name}</td>
      <td>${element.population}</td>
      <td>${element.climate}</td>
      <td>${element.gravity}</td>
      </tr>`
         showPlanetsBtn.style.visibility = 'visible';
         showPlanetsBtn.innerHTML = 'Show previous planets'
         showNextBtn.style.visibility = 'hidden';
         table.style.visibility = 'visible';
      })

   })
}