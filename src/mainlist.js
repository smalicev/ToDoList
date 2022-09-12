

const mainlist = function mainList(){
    const mainspace = document.querySelector('.mainCard');

    const mainlistcard = document.createElement('div');

    mainlistcard.classList.add('mainCard2');
    mainlistcard.setAttribute('id','plist');
    mainlistcard.innerHTML = '<h1>  Items</h1>';

    mainspace.appendChild(mainlistcard);

    const mainlistadd = document.createElement('div');
    mainlistcard.classList.add('addBut');
    mainspace.appendChild(mainlistcard);

}

function listInit(){
    return currentlist = [];
}

function createItem(title,description,dueDate,priority,doneStatus){
    return item = { title:title, description:description, dueDate:dueDate, priority:priority, doneStatus:doneStatus }
}

function appendItem(listobj){
    currentlist.push(listobj);
}

export { mainlist, createItem, listInit, appendItem };