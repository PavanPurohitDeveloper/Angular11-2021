//enumeration
var Result;
(function (Result) {
    Result[Result["Pass"] = 1] = "Pass";
    Result[Result["Fail"] = -1] = "Fail";
    Result[Result["Promoted"] = 0] = "Promoted";
})(Result || (Result = {}));
function Student() {
    //members
    var studentId = 101;
    var studentName = "Shrikanth";
    var isActive = true;
    //Array declaration
    var marks = [45, 67, 89];
    var total = 0;
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var i = marks_1[_i];
        total += i;
    }
    var average = total / 3.0;
    //creating array in different way
    var courses = ["HTML", "CSS", "Javascript", "JQuery", "ANgular"];
    //tuple
    var dateOfBirth = [22, "Jul", 19889];
    //using enumeration
    var result = Result.Pass;
    //function with expression
    this.result = function () {
        if (average >= 35) {
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    };
}
//object declare
var student = new Student();
console.log(student.result);
console.log(Result[student.result]);
