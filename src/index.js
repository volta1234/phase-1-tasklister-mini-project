let input = document.getElementById("entry")
let button = document.getElementById("addList")
let tasks = document.getElementById("tasks")
button.addEventListener("click", () => {
    let task = document.createElement("li")
     task.textContent = input.value
     tasks.appendChild(task)
})
