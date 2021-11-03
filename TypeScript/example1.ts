function Test() {
    //function scoped
    var marks: number = 33;
    var result: string = "pass";

    // blocked scope
    if (marks < 35) {
        var result: string = "fail";
        console.log('Inside the block ' + result);
    }
    console.log('Outside of the block ' + result);
};

Test();