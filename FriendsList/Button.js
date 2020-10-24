//banner
const element1 = document.createElement("h3");
element1.textContent = "Thank you for choosing us";

element1.style.color = "pink";
document.body.appendChild(element1)

for (let i = 0; i < 3; i++) {
    const element = document.createElement("h2");
    element.textContent = ` ${i}`;

    document.body.appendChild(element);

};


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