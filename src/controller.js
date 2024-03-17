import { tasks, projects } from './storage.js';
import { displayItems, createdProjects, createdTasks, } from './dom.js';

// console.log("the key on the first one is: " + Object.keys(test_arr[0]));
// console.log("the value is: " + Object.values(test_arr[0]));

displayItems(tasks);
displayItems(projects);

console.log(createdTasks);
console.log(createdProjects);