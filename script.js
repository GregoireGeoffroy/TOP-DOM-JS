const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("paragraph");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = "red";

const title3 = document.createElement("h3");
title3.classList.add("h3");
title3.textContent = "I’m a blue h3!";
title3.style.color = "blue";

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");

const title1 = document.createElement("h1");
title1.classList.add("h1");
title1.textContent = "I'm a div";

const paragraph2 = document.createElement("paragraph");
paragraph2.classList.add("paragraph2");
paragraph2.textContent = "ME TOO";

newDiv.appendChild(title1);
newDiv.appendChild(paragraph2);


container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(title3);
container.appendChild(newDiv);









