// Exercise 7 - Multiple functions with arrays

//list
var listPeople = [30,70,24,38,10];

//reverse - prints a reversed list
function printReverse(list){
    for(var i = list.length-1; i >= 0; i--){
        console.log(list[i]);
    }
}

//uniform - checks if all elements in one list are equal
function isUniform(list){
    var uniform = true;
    for(var i = 1; i < list.length; i++){
        if(list[i] != list[i-1]){
            uniform = false;
            break;
        }
    }
    return uniform;
}

// sumArray - sums all the elements of an array
function sumArray(array){
    var sum = 0;
    array.forEach(function(element){
        sum += element;
    });
    return sum;
}

// maxArray - finds the biggest element in the array
function maxArray(array){
    var max = array.indexOf(0);
    array.forEach(function(element){
        if(element > max){
            max = element;
        }
    })
    return max;
}

// custom forEach
function myForEach(arr, func){
    for(var i =0; i < arr.length; i++){
        func(arr[i]);
    }
}
var colors = ["red", "orange", "blue"];

//passing an alert function
myForEach(colors,alert())

//passing an anonymous function
myForEach(colors,function(color){
    console.log(color);
})

//calling function from object array
Array.prototype.myForEach = function(func){
    for(var i = 0; i < this.length; i++){
        func(this[i]);
    }
}
colors.myForEach(alert);