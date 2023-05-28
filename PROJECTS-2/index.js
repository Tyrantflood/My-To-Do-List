window.addEventListener("load", () => {
  const form = document.querySelector("#task");
  const input = document.querySelector("#what-to-do");
  const list_el = document.querySelector("#task-list");

  form.addEventListener("submit", (s) => {
    s.preventDefault();

    const task = input.value;

    // manipulate the DOM to add a new class element inside
    // with the inputted value

    const task_el = document.createElement("div");
    task_el.classList.add("task-list");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("task-content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_action_el = document.createElement("div");
    task_action_el.classList.add("task-actions");

    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.innerHTML = "Edit";

    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.innerHTML = "Delete";

    task_action_el.appendChild(task_edit);
    task_action_el.appendChild(task_delete);

    task_el.appendChild(task_action_el);

    input.value = "";

    list_el.appendChild(task_el);

    task_edit.addEventListener("click", () => {
      if (task_edit.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit.innerText = "Edit";
      }
    });

    task_delete.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });

    saveTasks();
  });

  function saveTasks() {
    const tasks = Array.from(list_el.querySelectorAll(".text")).map(
      (input) => input.value
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      savedTasks.forEach((task) => {
        const task_el = document.createElement("div");
        task_el.classList.add("task-list");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("task-content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("task-actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit";

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "Delete";

        task_action_el.appendChild(task_edit);
        task_action_el.appendChild(task_delete);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);

        task_edit.addEventListener("click", () => {
          if (task_edit.innerText.toLowerCase() == "edit") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit.innerText = "Save";
          } else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit.innerText = "Edit";
          }
          saveTasks();
        });

        task_delete.addEventListener("click", () => {
          list_el.removeChild(task_el);
          saveTasks();
        });
      });
    }
  }

  loadTasks();
});
