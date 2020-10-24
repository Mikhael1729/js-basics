const people = [];

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
        return alert("Person exist");

    const newPerson = {
        name,
        surnames,
        birthdate
    };

    // Storing the data.
    people.push(newPerson);

    // Updating the table (UI).
    updateTable(newPerson);
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