var list = document.getElementById("list")
function addTodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement('li')
    li.setAttribute("class","list-group-item text-left float-left")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("Delete")
    
    delBtn.setAttribute("class","btn text-right float-right ml-2")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
    
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editbtn.appendChild(editText)
    editbtn.setAttribute("class","btn text-right float-right")
    editbtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editbtn)
    list.appendChild(li)
    todo_item.value = ""

}
function deleteItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    list.innerHTML = "";
}
function editItem(e){
    var val = prompt("Enter Udapted Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}