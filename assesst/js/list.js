const form = document.querySelector(".list-form");
const input = document.getElementById("list-input");
const lanes = document.getElementById("lanes");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
  
    if (!value) return;
  
    const newList = document.createElement("div");
    newList.classList.add("swim-lane");
    newList.setAttribute("id", "todo-lane");

    const newH3 = document.createElement("h3");
    newH3.classList.add("heading");
    newH3.innerText = value;
  
   
  
    lanes.appendChild(newList);
    newList.appendChild(newH3);
  
    input.value = "";
  });