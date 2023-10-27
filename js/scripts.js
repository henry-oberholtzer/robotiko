// Business Logic

function countUp(num) {
    const numArray = [];
    let i = 0;
    while (i <= num) {
        numArray.push(i)
        i++
    };
    return numArray;
};

function numberReplacer(num) {
    const digitArray = num.toString().split('')
    if (digitArray.includes("3")) {
        return "Won't you be my neighbor?"
    } if (digitArray.includes("2")) {
        return "Boop!"
    } if (digitArray.includes("1")) {
        return "Beep!"
    } else {
        return num
    };
};

function arrayReplacer(array) {
    const replacedArray = array.map((element) => numberReplacer(element));
    return replacedArray;
}

function mrRobogerSystem(input) {
    return arrayReplacer(countUp(input));
}

function inputVerification(input) {
    if (parseInt(input) && input !== '') {
        return mrRobogerSystem(parseInt(input))
    } else {
        return Error("Not a valid numeric input")
    }
}

// UI Logic

function handleFormSubmission(e) {
    e.preventDefault();
    const input = document.getElementById("input").value;
    const outputArray = inputVerification(input);
    return printToUser(outputArray);
}

function printToUser(outputArray) {
    const output = document.getElementById("output");
    output.innerHTML = "";
    const ul = document.createElement("ul");
    outputArray.forEach((element, index) => {
        const li = document.createElement("li");
        li.append(element);
        return ul.append(li);
    });
    output.append(ul);
}

window.addEventListener("load", () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", handleFormSubmission)
});