//euler's method formula yi+1 = yi + f(yi,xi)h
const submitButton = document.getElementById('submit');
let stepSize;
let xStart;
let yStart;
let yEnd;
let differentialEquation; //must be in the form where dx/dy is on one side and x and ys are on the other side
submitButton.onclick = ()=>{
    stepSize = Number(document.getElementById("stepSize").value);
    xStart = Number(document.getElementById("startingX").value);
    yStart = Number(document.getElementById("startingY").value);
    yEnd = Number(document.getElementById("endY").value);
    differentialEquation = document.getElementById("differentialEquation").value;
    if (typeof stepSize == 'number' && typeof xStart == 'number' && typeof yStart == 'number' && typeof yEnd == 'number' && yEnd > yStart) {
        let results = eulerMethod(xStart,yStart,yEnd,stepSize);
        document.getElementById('resultHeader').innerHTML = 'Results';
        document.getElementById('results').innerHTML = ('X Value: ' + results.x + ' Y-Value: ' +   results.y + ' steps taken: ' + results.stepsTaken + ' time elapsed: ' + results.timeElapsed + 's');
    } else/* if (true)*/ { // could add error messages and whatnot for incorrect differential equations and numbers
        
    }
    }
function eulerMethod (xInitial, yInitial, yFin, stepSize1) {
    let yPrevious = yInitial;
    let yI = yInitial;
    let xValue;
    let stepsTaken;
    let startTime = new Date()
    for (let i = 0; yI <= yFin; i++) { //end condition is currently a certain end value could add 
        yI = yPrevious + findSlope(0,yPrevious)*stepSize1;
        yPrevious = yI;
        xValue = xInitial + i*stepSize;
        stepsTaken = i;
    }
    let endTime = new Date()
    let timeDiff = endTime - startTime;
    timeDiff /= 1000
    return {x:xValue, y:yI, stepsTaken:stepsTaken, timeElapsed: timeDiff};
}
//helper functions
//console.log(eval('25 + x'))
function findSlope (x,y) {
    return eval(differentialEquation); //this is where the differential equation goes (somehow the eval makes this program slower?)
    //returns some value
}

