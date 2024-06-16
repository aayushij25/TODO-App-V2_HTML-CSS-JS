let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.classList.add("delete");

  item.appendChild(deleteBtn);
  ul.append(item);
  console.log(inp.value);
  inp.value = "";
})

ul.addEventListener("click", function(event) {
  if(event.target.nodeName == "BUTTON") {
    let lstItem = event.target.parentElement;
    lstItem.remove();
    console.log("delete");
  }
})