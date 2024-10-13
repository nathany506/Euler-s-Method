//euler's method formula yi+1 = yi + f(yi,xi)h
const submitButton = document.getElementById('submit');

let stepSize;
let xStart;
let yStart;
let yEnd;
let stepNumber;
let differentialEquation; //must be in the form where dx/dy is on one side and x and ys are on the other side

submitButton.onclick = ()=>{
    stepSize = Number(document.getElementById("stepSize").value); //getting all the values for the method
    xStart = Number(document.getElementById("startingX").value);
    yStart = Number(document.getElementById("startingY").value);
    yEnd = Number(document.getElementById("endY").value);
    stepNumber = Number(document.getElementById("stepNumber").value);
    let disable = false;
    differentialEquation = document.getElementById("differentialEquation").value;
    if (typeof yEnd == 'number' && yEnd == 0 && stepNumber != 0) {
        disable = true;
    }
    if (typeof stepSize == 'number' && typeof xStart == 'number' && typeof yStart == 'number' && typeof yEnd == 'number' && (yEnd > yStart || yEnd < yStart) && !disable) {
        alert('hi')
        let results = eulerMethod(xStart,yStart,yEnd,stepSize);

        document.getElementById('resultHeader').innerHTML = 'Results';
        document.getElementById('results').innerHTML = ('X Value: ' + results.x + ' Y-Value: ' +   results.y + ' steps taken: ' + results.stepsTaken + ' time elapsed: ' + results.timeElapsed + 's');
    } else if (typeof stepSize == 'number' && typeof xStart == 'number' && typeof yStart == 'number' && typeof stepNumber == 'number' && stepNumber > 0 && Number.isInteger(stepNumber) ) {
        
        let results = eulerMethodStep(xStart,yStart,stepNumber,stepSize);
        
        document.getElementById('resultHeader').innerHTML = 'Results';
        document.getElementById('results').innerHTML = ('X Value: ' + results.x + ' Y-Value: ' +   results.y + ' steps taken: ' + results.stepsTaken + ' time elapsed: ' + results.timeElapsed + 's');

    } else { // could add error messages and whatnot for incorrect differential equations and numbers
        alert("Missing Parameters ")
    }
    }
function eulerMethod (xInitial, yInitial, yFin, stepSize1) { //for end condition
    let yPrevious = yInitial;
    let yI = yInitial;

    let xValue = xInitial;

    let stepsTaken = 0;
    let startTime = new Date()

    if (yFin > yInitial) {
        for (let i = 0; yI <= yFin; i++) { 
            yI = yPrevious + findSlope(xValue,yPrevious)*stepSize1;
            yPrevious = yI;
            xValue += stepSize;
            stepsTaken++;
        }
    } else if (yFin < yInitial) {
        for (let i = 0; yI >= yFin; i++) { 
            yI = yPrevious + findSlope(xValue,yPrevious)*stepSize1;
            yPrevious = yI;
            xValue += stepSize;
            stepsTaken++;
        }
    }
    
    let endTime = new Date()
    let timeDiff = endTime - startTime;
    timeDiff /= 1000
    return {x:xValue, y:yI, stepsTaken:stepsTaken, timeElapsed: timeDiff};
}
function eulerMethodStep (xInitial,yInitial,steps,stepSize1) {
    let yPrevious = yInitial;
    let yI = yInitial;

    let xValue = xInitial;

    let stepsTaken = 0;
    let startTime = new Date()
    for (let i = 0; i<steps; i++) { 
        yI = yPrevious + findSlope(xValue,yPrevious)*stepSize1;
        yPrevious = yI;
        xValue += stepSize;
        stepsTaken++;
    }
    let endTime = new Date()
    let timeDiff = endTime - startTime;
    timeDiff /= 1000
    return {x:xValue, y:yI, stepsTaken:stepsTaken, timeElapsed: timeDiff};
}

//helper functions
//console.log(eval('25 + x'))
//let test = Function("return " + "2+5"); //the function construct return an anonymous function:

//https://www.educative.io/answers/eval-vs-function-in-javascript
//console.log(test());

//let slopeFunction = Function("return " + differentialEquation)
//return slopeFunction();
function findSlope (x,y) {
    
    
    
    return eval(differentialEquation); //this is where the differential equation goes (somehow the eval makes this program slower?) 
    //this is a major security risk btw, cause someone could run malicious code using this. (but whatever)
    //returns some value
}

