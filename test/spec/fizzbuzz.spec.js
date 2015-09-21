/* global describe, it */

'use strict';

var fizzbuzz = require('../../app/fizzbuzz'),
    expect = require('chai').expect;

describe('FizzBuzz', function (){

    it('should return the number for numbers which can not be divided by 3 or 5', function (){

        // Arrange
        var numberWhichCanNotBeDividedBy3 = 1,
            numberWhichCanNotBeDividedBy5 = 2;

        // Act
        var testCase1 = fizzbuzz(numberWhichCanNotBeDividedBy3),
            testCase2 = fizzbuzz(numberWhichCanNotBeDividedBy5);

        // Assert
        expect(testCase1).to.be.equal('1');
        expect(testCase2).to.be.equal('2');
    });

    it('should return fizz for 3', function (){

        // Act
        var actual = fizzbuzz(3);

        // Assert
        expect(actual).to.be.equal('fizz');
    });

    it('should return fizz for 6', function (){

        // Act
        var actual = fizzbuzz(6);

        // Assert
        expect(actual).to.be.equal('fizz');
    });

    it('should return buzz for 5', function (){

        // Act
        var actual = fizzbuzz(5);

        // Assert
        expect(actual).to.be.equal('buzz');
    });

    it('should return buzz for 10', function (){

        // Act
        var actual = fizzbuzz(10);

        // Assert
        expect(actual).to.be.equal('buzz');
    });

    it('should return fizzbuzz for 15', function (){

        // Act
        var actual = fizzbuzz(15);

        // Assert
        expect(actual).to.be.equal('fizzbuzz');
    });

    it('should return fizzbuzz for 30', function (){

        // Act
        var actual = fizzbuzz(30);

        // Assert
        expect(actual).to.be.equal('fizzbuzz');
    });
});
