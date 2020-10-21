/* Create elements in the DOM */

const element1 = document.createElement("h1");
element1.textContent = "Hello, world!";

const element2 = document.createElement("h1");
element2.textContent = "hello, mikhael :3";

// Styling HTML elements created with JAvaScript inside JS.
element1.style.color = "red";
element2.style.color = "pink";

// Append the elements to the DOM.
document.body.appendChild(element1);
document.body.appendChild(element2);

/* LOOPS */
for (let i = 0; i < 10; i++) {
    const element = document.createElement("h2");
    element.textContent = `Hey ${i}`;

    document.body.appendChild(element);
}

/* Manipulate elements of the DOM */
const button = document.querySelector("button");
button.onclick = toggleTheme;

// Functions in JavaScript.
function toggleTheme() {
    // Change general theme.
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    // Update button color.
    button.style.color = "white"
    button.style.borderColor = "white";

    // Overload the button hover styles.
    const css = "button:hover { background-color: #6b6b6b;}";
    const style = document.createElement("style");

    if (style.styleSheet)
        style.styleSheet.cssText = css;
    else
        style.appendChild(document.createTextNode(css));

    button.appendChild(style);
}