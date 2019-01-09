const fizzBuzz = require('../fizz-buzz');

describe('Fizz Buzz: ', () => {
    test('tests with 2 as given number', () => {
        let expected = [1, 2];
        let number   = 2;
    
        expect(fizzBuzz(number)).toEqual(expected);
    });
    
    test('tests with 15 as given number', () => {
        let expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
        let number   = 15;
    
        expect(fizzBuzz(number)).toEqual(expected);
    });
    
    test('should return an empty array if no parameter passed', () => {
        expect(fizzBuzz()).toEqual([]);
    });
});
