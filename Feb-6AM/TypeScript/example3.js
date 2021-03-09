var courses = ["HTML", "CSS", "Javascript", "JQuery", "ANgular"];
//Normal for loop
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
//for each loop ..exeucting another function..
//function without having any name we call callback function.
courses.forEach(function (val, index) {
    console.log(index + "   " + val);
});
