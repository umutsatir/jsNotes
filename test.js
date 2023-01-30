let p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey, I'm Red!";
let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
document.body.appendChild(p);
document.body.appendChild(h3);
let div = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
let p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(p2);
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
document.body.appendChild(div);

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert(btn.id);
    });
});