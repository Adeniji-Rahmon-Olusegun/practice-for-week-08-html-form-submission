let str = "/assets/images/cat.jpg";

let firstSplit = str.split("/assets");

let secondSplit = firstSplit[1].split("/");

console.log(secondSplit);