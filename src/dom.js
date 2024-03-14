let task_button = document.getElementById("task_btn");
let proj_button = document.getElementById("proj_btn");

task_button.addEventListener("click", function () {
  console.log("I am a task");
});
proj_button.addEventListener("click", function () {
  console.log("I am a project");
});

export function displayItems(array) {
  console.log(array);
  array.forEach((element) => {
    let container = document.createElement("div");
    let h2 = document.createElement("h2");
    document.body.append(container);

    if (element.name) {
      container.append(h2);
      h2.innerText = "Name is: " + element.name;
    }

    if (element.project) {
      console.log("I am a project!");
      let p = document.createElement("p");
      container.append(p);
      p.innerText = "This is a project.";
    }

    if (element.priority) {
      let p = document.createElement("p");
      container.append(p);
      p.innerText = element.priority;
    }

    // p.innerText = "testing";
  });
}
