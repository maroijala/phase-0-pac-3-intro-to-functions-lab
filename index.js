


function shout(phrase) {
    return phrase.toUpperCase()
}

function whisper(phrase) {
    return phrase.toLowerCase()
}

function logShout(phrase) {
    console.log(phrase.toUpperCase())
}

function logWhisper(phrase) {
    console.log(phrase.toLowerCase())
}

function sayHiToHeadphonedRoommate(phrase) {
    if (phrase.toLowerCase() === phrase) {
        return ("I can't hear you!")
    }
    else if (phrase.toUpperCase() === phrase) {
        return ("YES INDEED!")
    }
    else if (phrase === "Let's have dinner together!") {
        return ("I would love to!")
    }
}