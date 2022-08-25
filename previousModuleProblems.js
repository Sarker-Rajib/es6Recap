// previousModuleProblems.js

// practice problem 1
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(2,5,6));

// practice problem 2
const mutualFriends = (friendsName) => {
    let newfriends = [];
    for(const friend of friendsName){
        if(friend.length % 2 == 0){
            newfriends.push(friend);
        }
        // console.log(friend.length); // console.log(friendsName.length); // friendsName.length // if(friend.length)
    }
    console.log(newfriends);
}

const friendsName = ['Ram', 'Sam', 'Jodu', 'Modhu', 'shamim']
// mutualFriends(friendsName);


// practice problem 3
const numbers = [1, 2, 3, 4, 5];

const averageOfSquare = () => {
    let sumOfSquareArray = 0;
    let arrayCout = numbers.length;

    for(const number of numbers){
        const numSquare = number * number;
        sumOfSquareArray += numSquare;
    }
    const averageValue = sumOfSquareArray / arrayCout;
    console.log(averageValue);
}
averageOfSquare(numbers);


// practice problem 4
const arr1 = [102, 36, 86, 87, 66];
const arr2 = [34, 44, 46, 47, 46];

const maxFromArray = (a, b) => {
    const ab = [...a, ...b];
    const maxNumber = Math.max(...ab);
    console.log(maxNumber);
}

maxFromArray(arr1, arr2);