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
};

function mrRobogerSystem(input, name) {
    const roboger = arrayReplacer(countUp(input))
    if (name !== "") {
        return nameInsertion(roboger, name)
    } else {
        return roboger
    };
};

function nameInsertion(array, name) {
    const insertedName = array.map((element) => {
        if (element === "Won't you be my neighbor?") {
            return "Won't you be my neighbor, " + name + "?"
        } else {
            return element;
        };
    });
    return insertedName
};

function inputVerification(input, name) {
    const nameTrim = name.trim().replace(/\W/g,"");
    const inputParse = parseInt(input);
    if (inputParse && input !== '') {
        if (name !== "") {
            return mrRobogerSystem(inputParse, nameTrim)
        } else {
            return mrRobogerSystem(inputParse, "")
        }
    } else {
        return Error("Not a valid numeric input")
    }
}

// UI Logic

function handleFormSubmission(e) {
    e.preventDefault();
    const input = document.getElementById("input").value;
    const name = document.getElementById("name").value;
    const outputArray = inputVerification(input, name);
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