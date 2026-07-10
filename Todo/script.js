// to store task data
let taskDs = [];

// this id will get incremented
let id = 1;

// declaration
const cancelBtn = document.getElementById("cancelModalBtn");
const addTaskModal = document.getElementById("modal");
const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const addBtn = document.getElementById("add-btn");
const addModalBtn = document.getElementById("addModalBtn");
const searchInput = document.getElementById("search-input");
const filterDd = document.getElementById("filter-dd");
const tableBody = document.getElementById("table-data");
const emptyMsg = document.getElementById("emptyMsg");

cancelBtn.addEventListener("click", function () {
  addTaskModal.style.display = "none";
  taskName.value = "";
  taskDesc.value = "";
});

addBtn.addEventListener("click", function () {
  filterDd.value = "all";
  addTaskModal.style.display = "flex";
  taskName.value = "";
  taskDesc.value = "";
});

searchInput.addEventListener("input", displayTask);
filterDd.addEventListener("change", displayTask);

addModalBtn.addEventListener("click", function () {
  addTask();
});

function addTask() {
  const name = taskName.value;
  const desc = taskDesc.value;

  if (name === "") {
    alert("Task name cannot be empty");
    return;
  }

  const newTask = {
    id: id,
    name: name,
    desc: desc,
    status: "Pending",
  };
  taskDs.push(newTask);
  id++;
  displayTask();
  addTaskModal.style.display = "none";
  taskName.value = "";
  taskDesc.value = "";
}

function displayTask() {
  const searchValue = searchInput.value.toLowerCase();
  const filterValue = filterDd.value;

  // filter by status first
  let filteredTasks = taskDs.filter(function (task) {
    if (filterValue === "completed") return task.status === "Completed";
    if (filterValue === "pending") return task.status === "Pending";
    return true;
  });

  // then filter by search text
  filteredTasks = filteredTasks.filter((task) =>
    task.name.toLowerCase().includes(searchValue),
  );

  tableBody.innerHTML = "";

  if (filteredTasks.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
  }

  filteredTasks.forEach(function (task, index) {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${index + 1}</td>
            <td contenteditable="true" class="editableCell" data-field="name" data-id="${task.id}">${task.name}</td>
            <td contenteditable="true" class="editableCell" data-field="desc" data-id="${task.id}">${task.desc}</td>
            <td>
                <select class="statusDd" data-id="${task.id}">
                    <option value="Pending" ${task.status === "Pending" ? "selected" : ""}>Pending</option>
                    <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
                </select>
            </td>
            <td>
                <button class="deleteBtn" data-id="${task.id}"> ❌Delete</button>
            </td>
        `;

    tableBody.appendChild(row);
  });

  attachRowEvents();
}

function attachRowEvents() {
  // status dropdown change
  document.querySelectorAll(".statusDd").forEach(function (dd) {
    dd.addEventListener("change", function () {
      const id = Number(dd.getAttribute("data-id"));
      const task = taskDs.find((t) => t.id === id);
      task.status = dd.value;
    });
  });

  // editable name/desc cells
  document.querySelectorAll(".editableCell").forEach(function (cell) {
    cell.addEventListener("focus", function () {
      cell.style.background = "green";
    });
    cell.addEventListener("blur", function () {
      cell.style.background = "";
      const id = Number(cell.getAttribute("data-id"));
      const field = cell.getAttribute("data-field");
      const task = taskDs.find((t) => t.id === id);
      task[field] = cell.textContent.trim();
    });
  });

  // delete button
  document.querySelectorAll(".deleteBtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = Number(btn.getAttribute("data-id"));
      taskDs = taskDs.filter((t) => t.id !== id);
      displayTask();
    });
  });
}
