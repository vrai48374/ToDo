let input = document.getElementById("todoInput");
let bt = document.getElementById("addBtn");
let ul = document.getElementById("todoList");

bt.addEventListener("click",function(){
    if(input.value==="")return;

    let li=document.createElement("li");
    let sp=document.createElement("span");

    sp.textContent=input.value;
    li.appendChild(sp);

    let cbutton=document.createElement("button");
    cbutton.textContent="Compelet"
    cbutton.className="complete-btn"
    cbutton.addEventListener("click",function(){
        sp.classList.toggle("completed")
    })
    li.appendChild(cbutton);

    let dbutton=document.createElement("button");
    dbutton.textContent="Delete";
    dbutton.className="delete-btn";
    dbutton.addEventListener("click",function(){
        li.remove();
    })

    li.appendChild(dbutton);


    ul.appendChild(li);
    input.value = "";
})
