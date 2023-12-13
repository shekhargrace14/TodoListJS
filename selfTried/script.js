
let addItem = document.getElementById("addItem");

let ul = document.getElementById("ul");


let span = document.createElement("span");


submit.addEventListener("click", function(){
    
    text =addItem.value
    
    let newText = document.createTextNode(text) 
    
    let li = document.createElement('li'); 

    li.appendChild(newText)

    ul.appendChild(li)

    addItem.value = "";

    li.appendChild(span)
  
    let cross = document.createElement("X")
    span.appendChild(cross)
    span.className = "delete d-flex align-center justify-center del"
    span.innerHTML="X"

})

span.addEventListener("click", function(){
    console.log("span del");
    li.innerHTML="";
    ul.removeChild(li)
})


// li.addEventListener('click', function(){
//     li.style.textDecoration:"line-through"
// })
