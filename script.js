// let submit = document.getElementById("submit");
let addItem = document.getElementById("addItem");
// let items = document.getElementById("items")

let ul = document.getElementById("ul");

let li = document.createElement('li'); 

let del = document.getElementById("del")

// submit.addEventListener("click", function(){

//     text =addItem.value
//     console.log("hello", text)
//     items.innerHTML = text

//     addItem.value = "";

 
//     ul.appendChild(newLi)


// })


submit.addEventListener("click", function(){

    text =addItem.value
    // console.log("hello", text)
    // items.innerHTML = text

    // liText = document.createTextNode(text)

    let newText = document.createTextNode(text) 

    li.appendChild(newText)

    ul.appendChild(li)



    addItem.value = "";



})

del.addEventListener("click", function(){
    console.log("delete")
    ul.removeChild(li)
})


