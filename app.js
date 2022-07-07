let plane = "plane";
let sevenFiftySeven = "757";
let drone = "drone";
let shellPlane = null;
let nothing = "";

var flyingObjects = [plane, sevenFiftySeven, drone, shellPlane, nothing];

function takeOff()
{
    for(var i = 0; i < flyingObjects.length; i++)
    {
        if(flyingObjects[i])
        {
            console.log(`${flyingObjects[i]} is preparing for takeoff!`);
        }
        else
        {
            console.log(`${flyingObjects[i]} cannot fly.`);
        }
    }
}
console.log(takeOff(flyingObjects));

