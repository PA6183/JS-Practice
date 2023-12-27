const sum = require("./13_1_sum.js");

describe('Homework_13 Task_1', ()=>{
    test ('Test: sum of 0.1 + 0.2 = 0.3', ()=>{
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    })
})