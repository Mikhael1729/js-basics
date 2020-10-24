// Load data from local storage.
const fromLocalStorage = getPeopleFromLocalStorage();
const people = [...fromLocalStorage];

// Show the stored data before refreshing.
loadDataInPeopleTable();

// Adding the onclick event to the button.
const saveButton = document.getElementById("save-button");
saveButton.onclick = onSaveButton;

function onSaveButton() {
    const name = document.getElementById("name").value;
    const surnames = document.getElementById("surnames").value;
    const birthdate = document.getElementById("birthdate").value;

    function findIfPersonExists(person) {
        const nameExists = person.name === name;
        const surnamesExists = person.surnames === surnames;

        const personExists = nameExists && surnamesExists;

        return personExists;
    }

    const personExists = people.find(findIfPersonExists);

    if (personExists)
        return;

    const newPerson = {
        name,
        surnames,
        birthdate
    };

    // Storing the data.
    people.push(newPerson);

    // Save on localstorage.
    savePersonInLocalStorage();

    // Updating the table (UI).
    updateTable(newPerson);
}

function savePersonInLocalStorage() {
    const peopleInString = JSON.stringify(people);
    localStorage.setItem("people", peopleInString);
}

function getPeopleFromLocalStorage() {
    const fromLocalStorage = localStorage.getItem("people");
    const peopleArray = JSON.parse(fromLocalStorage);
    
    return peopleArray;
}

function loadDataInPeopleTable() {
    for (let i = 0; i < people.length; i++) {
        const person = people[i]; // name, surnames, birthdate.
    
        updateTable(person);
    }
}

function updateTable(newPerson) {
    // Table.
    const tableElement = document.querySelector("table");

    // Table body.
    const tbodyElement = tableElement.tBodies[0];

    // Make a row.
    const rowElement = document.createElement("tr");

    // Make the columns.
    const nameColumn = document.createElement("td");
    nameColumn.textContent = newPerson.name;

    const surnamesColumn = document.createElement("td");
    surnamesColumn.textContent = newPerson.surnames;

    const birthdateColumn = document.createElement("td");
    birthdateColumn.textContent = newPerson.birthdate;

    rowElement.appendChild(nameColumn);
    rowElement.appendChild(surnamesColumn);
    rowElement.appendChild(birthdateColumn);

    tbodyElement.appendChild(rowElement);
}