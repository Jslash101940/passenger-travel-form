class user{
    constructor(firstName, lastName, Id){
        this.firstName = firstName;
        this.lastName = lastName
        this.id = Id
    }
}

let userList = [];
let userId = 100;

function addToList(){
    let firstName = document.getElementById("firstName").nodeValue;
    let lastName = document.getElementById("lastName").nodeValue;
    if(firstName != "" && lastName != ""){
        let user = new user (firstName, lastName , userId);
        userId++;
        userId.push(user);
    }
}

function print(){
    printSpace = document.getElementById("printSpace");

    printSpace = "";
    for(let i = 0; i < userList.length; i ++){
        space += `<div>${userList[i].id} ${userList[i].firstName} ${userList[i].lastName}</div>`
    }
}