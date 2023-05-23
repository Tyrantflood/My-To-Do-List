window.addEventListener("load", () => {
  const form = document.querySelector("#task");
  const input = document.querySelector("#what-to-do");
  const list_el = document.querySelector("#task-list");

  form.addEventListener("submit", (s) => {
    s.preventDefault();

    const task = input.value;
    // manipulate the DOM to add a new class element inside
    const task_el = document.createElement("div");
    task_el.classList.add("task-list");

    const task_content_el = document.createElement("div");

    task_content_el.classList.add("task-content");

    task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    list_el.appendChild(task_el);
    
  });
});
