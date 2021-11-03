var courses: string[] = ["HTML", "CSS", "Javascript", "JQuery", "ANgular"];

//Normal for loop
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

//for each loop ..exeucting another function..
//function without having any name we call callback function... Also called anonymous method
courses.forEach(function (val, index) {
    console.log(index + "   " + val);

})

//Mostly we use for-in and for-of loops in angular.
//for..in ... is used to print only index values..to iterate index we use this loop..
for (let x in courses) {
    console.log(x);
}

//for..of: Index .. to get the values from collection.
for (let x of courses) {
    console.log(x);
}

