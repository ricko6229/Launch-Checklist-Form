/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", init);

function init() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML =`
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diamter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
            `;
         })
         });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === ""|| cargoMassInput.value === "") {
         alert("All fields are required!");
      }

      if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Fuel Level and Cargo Mass Must be Numbers!");
      }

      if (isNaN(copilotNameInput.value) === false || isNaN(pilotNameInput.value) === false) {
         alert("Pilot Name and CoPilot Name must be real names!");
      } 

      function updateItems() {
         document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is Ready`;
         document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is Ready`; 
         document.getElementById("faultyItems").style.visibility ="visible";
      };
      updateItems(); 
      function updateCargoFuel() {
         let fuelNumber = Number(fuelLevelInput.value)
         let cargoNumber = Number(cargoMassInput.value)

         if (fuelNumber < 10000 && cargoNumber < 10000) {
            document.getElementById("fuelStatus").innerHTML = `We won't make it Jonny!`;
            document.getElementById("cargoStatus").innerHTML = `Cargo Is Good`
            document.getElementById("launchStatus").innerHTML =  `Shuttle not ready for launch!`;
            document.getElementById("launchStatus").style.color = "red";
         } else if (fuelNumber >= 10000 && cargoNumber > 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel Looks Good";
            document.getElementById("cargoStatus").innerHTML = `Cargo Is Too Heavy!!`
            document.getElementById("launchStatus").innerHTML =  `Shuttle not ready for launch!`;
            document.getElementById("launchStatus").style.color = "red";
         } else if (fuelNumber < 10000 && cargoNumber > 10000) {
            document.getElementById("fuelStatus").innerHTML = `We won't make it Jonny!`;
            document.getElementById("cargoStatus").innerHTML = `It's too heavy Jonny!`;
            document.getElementById("launchStatus").innerHTML =  `Shuttle not ready for launch!`;
            document.getElementById("launchStatus").style.color = "red";
         } else {
            document.getElementById("fuelStatus").innerHTML = `FUEL GOOD JONNY!`;
            document.getElementById("cargoStatus").innerHTML = `CARGO GOOD JONNY!`;
            document.getElementById("launchStatus").innerHTML =  `Shuttle ready for launch!`;
            document.getElementById("launchStatus").style.color = "green";
         };
      };
      updateCargoFuel();
   });
}




