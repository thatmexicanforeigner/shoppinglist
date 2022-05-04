var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var list = document.getElementsByTagName("li");

var removeButton = document.createElement("button");
removeButton.classList.add("deleteButton");

// if (finished) {
//     removeButton.appendChild(document.createTextNode("remove"));
//     removeButton.classList = "deleteButton";
//     li.appendChild(removeButton);

//     removeButton.addEventListener("click", function() {
//         this.parentElement.remove();
//     });
// } else {
//     this.getElementsByClassName("deleteButton")[0].remove();
// }

function toggleClassDoneOnAndOff(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}
ul.addEventListener("click", toggleClassDoneOnAndOff);


function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
        }
}

function removeElement(li) {
    var element = document.getElementById(li);
    element.parentNode.removeChild(li);
}

button.addEventListener("click", addListAfterClick)
    


input.addEventListener("keypress", addListAfterKeypress)