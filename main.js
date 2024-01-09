function addTodo(){
    var inputValue = document.getElementById("input-text").value;
    console.log(inputValue);

    var listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    listItem.appendChild(checkbox);

    var textSpan = document.createElement("span");
    var textNode = document.createTextNode(""+inputValue);
    textSpan.appendChild(textNode);
    listItem.appendChild(textSpan);
    checkbox.style.marginRight = "5px";
    
    checkbox.addEventListener("change",function(){
        if(checkbox.checked == true)
        {
            textSpan.style.textDecoration = "line-through";
            textSpan.style.color = "lightgray";
            UpdateItemCount();
        }
        else{
            textSpan.style.textDecoration = "none";
            textSpan.style.color = "black";
            UpdateItemCount();
        }
    });

    document.getElementById("todoList").appendChild(listItem);
    // var horizontalLine = document.createElement("hr");
    // document.getElementById("todoList").appendChild(horizontalLine);

    document.getElementById("input-text").value = "";
}

function UpdateItemCount(){
var totalItems = document.getElementById("todoList").getElementsByTagName("li").length;
var checkedItems= document.querySelectorAll("#todoList .checkbox:checked").length;
var uncheckedItems = totalItems - checkedItems;

document.getElementById("totalItems").innerText = uncheckedItems;

}