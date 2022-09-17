function listInit(){
    let currentlist = [];
    return currentlist;
}

function createItem(title,description,dueDate,priority,doneStatus){
    let item = { title:title, description:description, dueDate:dueDate, priority:priority, doneStatus:doneStatus }
    return item;
}

function appendItem(listobj,list){
    list.push(listobj);
}

function deleteItemDOM(id){
    let delnode = document.querySelector(id);
    delnode.remove();
}

function deleteItemList(id,list){
    list.splice(id,1);
}

export { createItem, listInit, appendItem, deleteItemDOM, deleteItemList };