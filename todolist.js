//TODO LIST
var todolist = []

/*

//task structure
{
    name: string,
    description: string,
    due: Date,
    completed: Boolean
}
*/

function addTask(task){
    if(!typeof task === 'object'){ 
        return false 
    }
    todolist.push(task)
    console.log(todolist)
    return true
}

function removeTask(task){
    if(!typeof task === 'object'){ 
        return false 
    }
    const index = todolist.indexOf(task)
    if(index < 0){
        return
    }

    todolist.splice(index,1)
    console.log(todolist)
}

function completeTask(task){
    if(!typeof task === 'object'){ 
        return false 
    }
    const index = todolist.indexOf(task)
    if(index < 0){ 
        return false 
    }

    task.completed = true
    todolist[index] = task //ANOTHER TIME
}

const walktopark = {
    name: "Walk to the park",
    description: "Walk to 105 somewhere avenue",
    due: new Date("3/28/2023"),
}

addTask(walktopark)
completeTask(walktopark)

const walkthedog = {
    name: "Walk the dog",
    description: "Walk around the block",
    due: new Date("3/27/2023"),
}

addTask(walkthedog)
removeTask(walkthedog)



/* //splices 
var arr = [1,5,10,15]
console.log(arr.splice(2,1))
console.log(arr)
*/