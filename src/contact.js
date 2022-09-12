

const contact = function showContact(){
    const mainspace = document.querySelector('.mainCard');

    const contactcard = document.createElement('div');

    contactcard.classList.add('mainCard2');
    contactcard.setAttribute('id','contact');

    mainspace.appendChild(contactcard);
}

export { contact };