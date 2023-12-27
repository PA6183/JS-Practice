const filterFoodPrice = require("./13_4_food.js");
const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
    ];
    const min = 12;
    const max = 40;

    describe('Homework_13 Task_4', ()=>{

        test ("Sub task 1: Test whether the expected length of the sorted array 3 corresponds to the actual length.", ()=>{
          expect(filterFoodPrice(food,min,max).length).toBe(3);
        });

        test ("Sub task 2: Test whether the sorted array contains the object { kind: 'pepper', price: 27 }.", ()=>{
            expect(filterFoodPrice(food,min,max)).toContainEqual({ kind: 'pepper', price: 27 });
          });

        test ("Sub task 3: Test whether the sorted array contains 2, 3, and 4 elements of the original food array.", ()=>{
          expect(filterFoodPrice(food,min,max)).toEqual(expect.arrayContaining([food[1], food[2], food[3]]));
        });

        test ("Sub task 4: Test whether the price property of the 1st element of the sorted array is greater than min.", ()=>{
          expect(filterFoodPrice(food,min,max)[0].price).toBeGreaterThan(min);
        });
        
        test ("Sub task 5: Test whether the price property of the 3rd element of the sorted array is less than max.", ()=>{
          expect(filterFoodPrice(food,min,max)[2].price).toBeLessThan(max);
        });
        
        test ("Sub task 6: Test the assertion that the sorted array does not contain the element { kind: 'lemon', price: 50 }.", ()=>{
          expect(filterFoodPrice(food,min,max)).not.toContainEqual({ kind: 'lemon', price: 50 });
        });
        
        //-------------------------------> Sub task 7: Propose and test at least 2-3 of your statements for the given function and food array
        test ('Sub task 7.1: Test that the "price" value of first element in the filtered array is 16', ()=>{
          expect(filterFoodPrice(food,min,max)[0].price).toBe(16);
        });
            
        test ('Sub task 7.2: Verify that "price" values of the filtered array are integers', ()=>{
            for(el of filterFoodPrice(food,min,max)){
            expect(el.price.toString()).toMatch(/^\d+$/);
            }
        });

        test ('Sub task 7.3: Verify that "kind" values of the filtered array are not null', ()=>{
            for(el of filterFoodPrice(food,min,max)){
            expect(el.kind).not.toBeNull()
            }
        });
    })