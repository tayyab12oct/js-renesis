function test() {
    var a = 110;
    a = a / 10;
    console.log(a);
    var result = a % 3.
    console.log(result);
    console.log("New Result", result < 2 ? (result + 1) : (result - 1))
}
test()



function test2() {
    var a = 1011;
    a = a * 10;
    console.log(a);
    var result = a / 2.
    console.log(result);
    console.log("New Result", result % 5 === 0  ? 'Divided by 5' : 'Not Divided by 5')
}
test2()


function test3() {
    var a = 2;
    a = a++
    console.log(a);
    a = ++a
    console.log(a);
}
test3()
