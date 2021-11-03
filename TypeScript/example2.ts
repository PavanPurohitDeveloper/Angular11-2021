//enumeration
enum Result { Pass = 1, Fail = -1, Promoted = 0 };

function Student() {

    //members
    let studentId: number = 101;
    let studentName: string = "Shrikanth";
    let isActive: boolean = true;

    //Array declaration
    let marks: Array<number> = [45, 67, 89];
    let total = 0;

    //for of loop
    for (let i of marks) {
        total += i; // we get total values from here
    }

    let average: number = total / 3.0;

    //creating array in different way
    var courses: string[] = ["HTML", "CSS", "Javascript", "JQuery", "ANgular"];

    //tuple
    let dateOfBirth: [number, string, number] = [22, "Jul", 19889];

    //using enumeration
    let result: Result = Result.Pass;

    //function with expression
    this.result = function () {
        if (average >= 35) {
            return Result.Pass;
        } else {
            return Result.Fail;
        }
    }
}

//object declare
var student = new Student();
console.log(student.result);
//console.log(Result[student.result]);