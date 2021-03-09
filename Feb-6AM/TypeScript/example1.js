function Test() {
    var marks = 33;
    var result = "pass";
    if (marks < 35) {
        var result = "fail";
        console.log('Inside the block ' + result);
    }
    console.log('Outside of the block ' + result);
}
;
Test();
