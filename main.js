let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let nav = document.querySelector("#nav");
let container = document.querySelector("#container");
let btn = document.querySelector("#btn01");
let btnsubmit = document.querySelector("#btnsubmit");

const saveTodo = (e) => {

  e.preventDefault();
  let li = document.createElement("li");
  li.innerText = input.value;
  li.className = "list-group-item rounded-0";

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "btn btn-sm btn-danger float-end rounded-0";
  li.appendChild(delBtn);
  ul.appendChild(li);
  form.reset();
};

form.addEventListener("submit", saveTodo);

const removeTodo = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are You Sure?")) {
      ul.removeChild(li);
    }
  }
};

ul.addEventListener("click", removeTodo);

const runEffect = (e) => {
  
};

container.addEventListener("mousemove", runEffect);

let count = 0;
const Themechanged = () => {
  if (count % 2 === 0) {
    nav.className = "navbar bg-secondary";
    btn.className = "btn btn-light btn-sm float-end rounded-0";
    container.className = "container-fluid p-5 bg-dark ";
    btnsubmit.className = "btn btn-secondary w-100 rounded-0";
  } else {
    nav.className = "navbar bg-dark text-dark";
    btn.className = "btn btn-warning btn-sm float-end rounded-0";
    container.className = "container-fluid p-5 bg-light ";
    btnsubmit.className = "btn btn-success w-100 rounded-0";
  }
  count++;
};

btn.addEventListener("click", Themechanged);
