function jediName(firstName, lastName) {
    if (typeof firstName != "string" || typeof lastName != "string" ) {
        throw new Error("One or more of the names are not strings.")
    }
    else {
    let thisJediName = ( lastName.slice(0, 3) + firstName.slice(0, 2))
    console.log(thisJediName)
    return thisJediName
    }
}

try {
jediName("Andrew", "Jessen-Tyler");}
catch(err) {
    console.log(err.message);
}