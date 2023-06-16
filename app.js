const myInput = document.querySelector("#myInput");
const myListContainer = document.querySelector("#myListContainer");
const myButton = document.querySelector("#myButton");


myButton.addEventListener("click", addBtn);

//my function for adding or storing a list

function addBtn(){
    //if user didn't put any value or Text and click the add button then it should return the alert message

    if(myInput.value === ''){
        alert(`You must write Something`);
    }

    // while if the user put or add anything then it will go to else condition which is to add a todo list.

    else {
        let li = document.createElement("li");
        li.innerHTML = myInput.value;
        myListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData()
    }
    myInput.value = "";
    saveData()
    
}

//we selected our list Container to have a Event Listener of click to perform a certain function.

myListContainer.addEventListener("click", checked);

//checked function simply saying that whenever we click inside myListContainer where we have stored all the tasks.

function checked(e){

    //(if statement) firstly it will check where we have clicked if we click on li then it should add the checked className and if the checked class name is already there it will remove that because we added classlist.toggle from the target element which is "li"

    if(e.target.tagName ===  "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }

    // (else if) but if the target Element is a span then it will delete the parent element, that's why we have a parentElement.remove() so the parent element is the "li" now it will remove that li so the task or the user add in our to do list will be deleted.

    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
} false;

// this function make to stored our data or the user put to our to do list, if the webpage reload or close then this function will save the remain data.

function saveData(){
    localStorage.setItem("data", myListContainer.innerHTML);
}

// and this function for me is like to show the data we save or stored whenever we will open the website again

function showData(){
    myListContainer.innerHTML = localStorage.getItem("data");
}

showData()