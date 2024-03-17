let task_button = document.getElementById("task_btn");
let proj_button = document.getElementById("proj_btn");

task_button.addEventListener("click", function () {
  console.log("I am a task");
});
proj_button.addEventListener("click", function () {
  console.log("I am a project");
});

function newTask(task_title, priority_string) {
  let task = {
    task_title: task_title,
    items: {
      priority_string: priority_string,
    },
  };
  pushTasks(task);
}

function newProject(project_title,task_title,priority_string) {
  let project = {
    project_title: project_title,
    tasks: newTask(task_title, priority_string),
  };
  pushProjects(project);
}

function pushTasks(tasks) {
  createdTasks.push(tasks);
}

function pushProjects(projects) {
  createdProjects.push(projects);
}

let createdTasks = [];
let createdProjects = [];
let obj1 = new newTask("get up", null);
let obj2 = new newProject("program", "finish project", "medium");
let obj3 = new newTask("third", "high priority");
let obj4 = new newProject("do dishes", null, "high");
let obj5 = new newProject("do laundry", "finish chores", "low");

export { createdProjects, createdTasks };

export function displayItems(array) {
  console.log("the main array is: ", array);
  array.forEach((element) => {
    let container = document.createElement("div");
    let h2 = document.createElement("h2");
    document.body.append(container);

    if (element.project_title) {
      // console.log("I am a project!");
      let h2 = document.createElement("h2");
      container.append(h2);
      h2.innerText = "This is a project called: " + element.project_title;
    }

    if (element.project_title && element.task_title) {
      let p = document.createElement("p");
      container.append(p);
      p.innerText = "Task title is: " + element.task_title;
    }

    if (!element.project_title && element.task_title) {
      container.append(h2);
      h2.innerText = "Task title is: " + element.task_title;
    }

    if (element.priority_string) {
      let p = document.createElement("p");
      container.append(p);
      p.innerText = element.priority_string;
    }

    // p.innerText = "testing";
  });
}
