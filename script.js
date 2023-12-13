let submit = document.getElementById("submit");
let addItem = document.getElementById("addItem");

let items = document.getElementById("items")

submit.addEventListener("click", function(){

    text =addItem.value
    console.log("hello", text)
    items.innerHTML = text

    addItem.value = "";


})