const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2' ];

describe('Homework_13 Task_2', ()=>{
    test ('Sub task 1: Test whether the array contains the element "admin"', ()=>{
      expect(userList).toContain("admin")
    });

    test ('Sub task 2: Test whether the first element in the array is “Nick”', ()=>{
        expect(userList[0]).toBe("Nick") 
    });

    test ('Sub task 3: Test whether the last element in the array is “new _ user_2””', ()=>{
        expect(userList[userList.length-1]).toBe("new _ user_2") // NOTE: Expected result "new _ user_2" contains space characters as opposed to the value in the array which causes the test failure
    });

    test ('Sub task 4: Test the statement that the length of the array is 5', ()=>{
        expect(userList.length).toBe(5) 
    });

    test ('Sub task 5: Test the statement that the 3rd element of the array has type string', ()=>{
        expect(typeof userList[2]).toBe('string') 
    });

    test ('Sub task 6: Prove the statement that the array does not have an 8th element', ()=>{
        expect(userList[7]).toBeUndefined
    });
})