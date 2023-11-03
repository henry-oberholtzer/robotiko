// Business Logic

function countUp(num) {
    const numArray = [];
    let i = 0;
    while (i <= num) {
        numArray.push(i);
        i++;
    };
    return numArray;
}

function countDown(num) {
    return countUp(num).reverse();
}

function countUpOrDown(num, direction) {
    if (direction === "descend") {
        return countDown(num);
    } else {
        return countUp(num);
    }
}

function numberReplacer(num) {
    const digitArray = num.toString().split('');
    if (digitArray.includes("3")) {
        return "Robotiko Rejekto!";
    } if (digitArray.includes("2")) {
        return "Say it!";
    } if (digitArray.includes("1")) {
        return "Spell!";
    } else {
        return num;
    }
}

function arrayReplacer(array) {
    const replacedArray = array.map((element) => numberReplacer(element));
    return replacedArray;
}

function robotikoSystem(input, name, direction) {
    const robotiko = arrayReplacer(countUpOrDown(input, direction));
    if (name !== "") {
        return nameInsertion(robotiko, name);
    } else {
        return robotiko;
    }
}

function nameInsertion(array, name) {
    const insertedName = array.map((element) => {
        if (element === "Robotiko Rejekto!") {
            return name + " Rejekto!";
        } else {
            return element;
        }
    });
    return insertedName;
}

function inputVerification(input, name, direction) {
    const nameTrim = name.trim().replace(/\W/g,"");
    const inputParse = parseInt(input);
    if (inputParse && input !== '') {
        if (name !== "") {
            return robotikoSystem(inputParse, nameTrim, direction);
        } else {
            return robotikoSystem(inputParse, "", direction);
        }
    } else {
        return Error("Not a valid numeric input");
    }
}

// UI Logic

function handleFormSubmission(e) {
    e.preventDefault();
    const input = document.getElementById("input").value;
    const name = document.getElementById("name").value;
    const descendAscend = document.getElementById("descendAscend").value;
    const outputArray = inputVerification(input, name, descendAscend);
    if(input) {
        return printToUser(outputArray);
    }
}

function printToUser(outputArray) {
    const output = document.getElementById("output");
    output.innerHTML = "";
    output.setAttribute("class", "container-md border rounded p-4 bg-light");
    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group list-group-flush bg-light");
    outputArray.forEach((element, index) => {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item bg-light");
        li.append(element);
        return ul.append(li);
    });
    output.append(ul);
}

window.addEventListener("load", () => {
    const output = document.getElementById("output");
    output.setAttribute("class", "invisible");
    const form = document.getElementById("form");
    form.addEventListener("submit", handleFormSubmission);
});