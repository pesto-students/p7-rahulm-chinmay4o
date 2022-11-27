
function printUser () {
    let name1 = "Jhon";

    console.log(`${this.name1} is doing well`);
    return `${this.name1} is doing well`;
}

let obj1 = {
    name1: "David"
}

const newUser = printUser.bind(obj1);

newUser();