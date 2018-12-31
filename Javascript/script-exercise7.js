//list
var listPeople = ["ado", "este", "aud"];

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