function rps(hand) {
    const pchand = Math.floor(Math.random() * 3) + 1;
    
    if (hand === 1) {
        console.log("You picked rock")
    }
    else if (hand === 2) {
        console.log("You picked paper")
    }
    else if (hand === 3) {
        console.log("You picked scissors")
    }
    else {
        console.log("Not a valid answer. Please only use 1, 2, and 3")
        return;
    }

    if (pchand === 1) {
        console.log("The computer picked rock")
    }
    else if (pchand === 2) {
        console.log("The computer picked paper")
    }
    else if (pchand === 3) {
        console.log("The computer picked scissors")
    }
    else {
        console.log("Something happened")
        return;
    }

    if (hand === pchand) {
        console.log("It's a tie!")
    }
    else if (hand === 1 && pchand === 2) {
        console.log("You lose.")
    }
    else if (hand === 1 && pchand === 3) {
        console.log("You win!")
    }
    else if (hand === 2 && pchand === 1) {
        console.log("You win!")
    }
    else if (hand === 2 && pchand === 3) {
        console.log("You lose.")
    }
    else if (hand === 3 && pchand === 1) {
        console.log("You lose.")
    }
    else if (hand === 3 && pchand === 2) {
        console.log("You win!")
    }
    else {
        console.log("You shouldn't be seeing this. Something really broke this time")
    }
}

rps();