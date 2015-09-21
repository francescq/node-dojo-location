/* global module */

'use strict';

function canBeDividedByThree(number) {
    return number % 3 === 0;
}

function canBeDividedByFive(number) {

    return number % 5 === 0;
}

function canBeDividedByThreeAndFive(number) {

    return canBeDividedByThree(number) && canBeDividedByFive(number);
}

var fizzbuzz = function(number) {

    if(canBeDividedByThreeAndFive(number)){
        return 'fizzbuzz'
    }

    if (canBeDividedByThree(number)) {
        return 'fizz';
    }

    if (canBeDividedByFive(number)) {
        return 'buzz';
    }

    return number.toString();
}

module.exports = fizzbuzz;
