let test_arr = [
];

let obj1 = new newTask(null,"get up",null);
let obj2 = new newTask('program','finish project',"medium");
let obj3 = new newTask(null,'third',"high priority");
let obj4 = new newTask('do dishes',null,"high");
let obj5 = new newTask('do laundry','finish chores',"low");

function newTask(project_title,task_title,priority_string) {
    this.task_title = task_title;
    this.project_title = project_title;
    this.priority_string = priority_string;
}


test_arr.push(obj1,obj2,obj3,obj4,obj5);

export {
    test_arr,
}