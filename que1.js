const input = [5, 4, 8, 7, 10, 2, 9, 3, 2];
const input1 = [1,2,3,4,5,6,7,8,44,6,7,66];
const input2 = [1,1,1,1,1,1,1,2]

const findMaxTwo = (input) => {
    
    // handling edge case
    if(input.length < 2){
        return input
    }

    // using pre-built fundtion to sort the array
    const sortedList = input.sort(function(a, b){return b - a});

    // returning first two elements of array
    return [sortedList[0], sortedList[1]]   
}

console.log(findMaxTwo(input2))