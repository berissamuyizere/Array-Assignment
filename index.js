//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1=[3,7,34,90,12];
let arr2=[true,"green","where",12,56]
console.log(arr1[arr1.length-1])
console.log(arr2[arr2.length-1])

//Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"]
let myPets=["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(""));

//Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
//Ascending order
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let ascendingOrder=arr3.sort(function(a,b){
    return a-b;
});
console.log(ascendingOrder);

//Descending Order
let arr4= [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let descendingOrder=arr4.sort(function(a,b){
    return b-a;
})
console.log(descendingOrder);

//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
let duplicatedArray=[];
let uniqueArray=arr.filter(function(item,index){
    if (arr.indexOf(item) !== index && !duplicatedArray.includes(item)) {
        duplicatedArray.push(item); 
    }
    return arr.indexOf(item) === index; 
});
console.log("Array without unique values:",uniqueArray);
console.log("Array with duplicates:",duplicatedArray);

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found". let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4]
arr5.includes("food")?console.log("food"):console.log("the search was not found");

////Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
.split("").sort().join("");
console.log(word);

//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruits=["apple","banana","mango","papaya","watermelon","grapes","orange","kiwi","strawberry","blueberry"];
fruits.splice(5,0,"Tomato");
console.log(fruits);