// @ts-check

/**
*Calculates the area of a circle
*@param{number} r (radius of a circle)
*/
const circleArea = r => 3.14 * (r ** 2);
//const squareArea = s => s * s;

export {circleArea};

export class Car{
    constructor(model) {
        this.model = model;
    }
    printModel(){
        console.log(this.model);
    }
}