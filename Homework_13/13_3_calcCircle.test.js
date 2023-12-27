const {getCircleLength, getCircleArea} = require("./13_3_calcCircle.js");

describe('Homework_13 Task_3', ()=>{
  
    test ('Sub task 1: Test that the length of the circle having radius = 22 is 138.2 when rounded to the first decimal', ()=>{
      expect(getCircleLength(22)).toBeCloseTo(138.2, 1);
    });

    test ('Sub task 2: Test that the area of the circle having radius = 9 is approx 254.47', ()=>{
      expect(getCircleArea(9)).toBeCloseTo(254.47);
    });

    test ('Sub task 3.1: Test that argument is not passed to the getCircleLength() function', ()=>{
      expect(getCircleLength()).toBe(NaN);
    });

    test ('Sub task 3.2: Test that argument is not passed to the getCircleArea() function', ()=>{
      expect(getCircleArea()).toBeNaN();
    });
})
