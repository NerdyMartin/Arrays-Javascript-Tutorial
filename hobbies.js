var persontemplate = {
    name:"",
    age:0,
    hobbies:[]
}

var hobyytemplate = {
    name:"",
    status:0 // 0 = pending, 1 = completed
}

function addHobby(hobby,person){
    person.hobbies.push(hobby)
}

function listHobbies(person){
    var out = "<ul>"
    for(var i in person.hobbies){
        var hobby = person.hobbies[i]
        out += "<li>"+hobby.name+"</li>"
    }
    out += "</ul>";
    return out
}

//create a new person by copying the person template
var bob = new Object(persontemplate)
bob.name = "bob"
bob.age = 25

addHobby({
    name:"Walk the dog"
},bob)

addHobby({
    name:"Feed the cat"
},bob)

var htmlHobbies = listHobbies(bob)
console.log(html)