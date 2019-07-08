function decode(word){
    let key = (word.slice(0,1))
    if (key === "a") {
        console.log(word.slice(1,2));
    }
    else if (key === "b") {
        console.log(word.slice(2,3));
    }
    else if (key === "c") {
        console.log(word.slice(3,4));
    }
    else if (key === "d") {
        console.log(word.slice(4,5));
    }
    else {
        console.log("//");
    }
}



let coded = ["craft", "block", "argon", "meter", "bells", "brown", "croon", "droop"];
coded.forEach(decode);