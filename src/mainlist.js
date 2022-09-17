

const mainlist = function mainList(){
    const mainspace = document.querySelector('.mainCard');
    const mainlistcard = document.createElement('div');

    mainlistcard.classList.add('mainCard2');
    mainlistcard.setAttribute('id','plist');
    mainlistcard.innerHTML = '<h1>  Items</h1>';

    mainspace.appendChild(mainlistcard);

    const mainlistadd = document.createElement('button');
    mainlistadd.classList.add('addbut');
    mainspace.appendChild(mainlistadd);
}


export { mainlist }