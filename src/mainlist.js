

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


function createItem(title,description,dueDate,priority,doneStatus){
    return { title, description, dueDate, priority, doneStatus}
}

export { mainlist };