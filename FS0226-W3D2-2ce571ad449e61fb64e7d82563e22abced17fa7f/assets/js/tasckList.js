const newTask = document.querySelector("#newTask");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  if (check()) {
    let task = newTask.value;
    printList(task);
    clearForm();
  } else {
    alert("Inserire un task nel campo!");
    return;
  }
});
const check = () => {
  if (newTask.value === "") {
    return false;
  }
  return true;
};

const printList = (task) => {
  const newLi = document.createElement("li");
  newLi.textContent = newTask.value;
  taskList.appendChild(newLi);
};

const clearForm = () => {
  newTask.value = "";
};
