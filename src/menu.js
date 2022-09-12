
const menu = function showMenu(){
    const mainspace = document.querySelector('.mainCard');

    const menucard = document.createElement('div');


    menucard.classList.add('mainCard2');
    menucard.setAttribute('id','menu');

    const menuitems = document.createElement('div');
    
    menuitems.classList.add('items');

    menuitems.innerHTML = "<ol> <li>Coffee</li> <li>Tea</li> <li>Milk</li> </ol>"

    

    mainspace.appendChild(menucard);
    
    menucard.appendChild(menuitems);
}

export { menu };