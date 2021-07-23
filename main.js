// Write your JavaScript code here!

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895]
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

            // Loop Through array and append 
            planets.forEach(function(element) { 
                var arrayElements = document.createElement("option");
                arrayElements.innerHTML = element[0]; 
                document.getElementById("planets").appendChild(arrayElements);
            });



function calculateWeight(weight, planetName){

    let spaceWeight;
    let index;

    for(let i=0; i< planets.length; i++)
    {
        let planetInfor = planets[i];
        if(planetInfor.includes(planetName)){
            index =i
        } else continue;
    }

    gravity = planets[index][1];
    spaceWeight = gravity * weight;

    console.log(spaceWeight);

}

function handleClickEvent(e){

   var userweight = document.getElementById('user-weight').value;
   var planetName = document.getElementById('planets').value;
   var result = calculateWeight(userweight,planetName);

   document.getElementById('output').innerHTML = 'If you are on ' + planetName + ' , you would weigh'+ result + 'pounds'
}

document.getElementById('calculate-button').onClick = handleClickEvent;