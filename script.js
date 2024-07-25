const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

// Corrected the tag name to "p"
const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = "red";

const title3 = document.createElement("h3");
title3.classList.add("h3");
title3.textContent = "I’m a blue h3!";
title3.style.color = "blue";

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
// Added styling for black border and pink background
newDiv.style.border = "1px solid black";
newDiv.style.backgroundColor = "pink";

// Corrected the text content
const title1 = document.createElement("h1");
title1.classList.add("h1");
title1.textContent = "I’m in a div";

// Corrected the tag name to "p"
const paragraph2 = document.createElement("p");
paragraph2.classList.add("paragraph2");
paragraph2.textContent = "ME TOO";

// Append title1 and paragraph2 to newDiv
newDiv.appendChild(title1);
newDiv.appendChild(paragraph2);

// Append elements to container
container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(title3);
container.appendChild(newDiv);


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});