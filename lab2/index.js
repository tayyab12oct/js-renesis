function test() {
    var name = "new name";
    console.log("name", name);
    if (true) {
        console.log("inside if", name);
        var newName = "new name";
    }
    console.log("its new name", newName);
}

// Output
// 1, 'name new name'
// 2, 'inside if new name'
// 3, 'its new name new name'


function test1() {
    let name = "new name";
    console.log("name", name);
    if (true) {
        console.log("inside if", name);
        let newName = "new name";
    }
    console.log("its new name", newName);
}

// Output
// 1, 'name new name'
// 2, 'inside if new name'
// 3, 'newName is not defined' => Error


function test2() {
    const name = "new name";
    console.log("name", name);
    if (true) {
        console.log("inside if", name);
        const newName = "new name";
    }
    console.log("its new name", newName);
}

// Output
// 1, 'name new name'
// 2, 'inside if new name'
// 3, 'newName is not defined' => Error

