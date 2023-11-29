let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

//新增待辦事項
addToDoButton.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);

  //點擊一下增加刪除線
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });

  //點擊兩下刪除事項;
  paragraph.addEventListener("dblclick", () => {
    toDoContainer.removeChild(paragraph);
  });
});
