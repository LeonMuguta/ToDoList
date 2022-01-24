//Adding item to the To-Do List
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("enteredTask").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("listItems").appendChild(li);
    }
    document.getElementById("enteredTask").value = "";
  
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
}

// Create a "close" button and append it to each list item
// let myNodelist = document.getElementsByTagName("li");

// for (let i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("span");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  console.log(ev.target.tagName)
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});