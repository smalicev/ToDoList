import { xor } from "lodash";



const pageLoad = function pageLoad(){
const page = document.querySelector('#content');
const header = document.createElement('div');
const maintent = document.createElement('div');
const footer = document.createElement('div');
maintent.classList.add('maintent');
header.classList.add('header');

const mainCard3 = document.createElement('div');
mainCard3.classList.add('mainCard3');
mainCard3.innerHTML = 'Photo by <a href="https://unsplash.com/@daniele_franchi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniele Franchi</a> on <a href="https://unsplash.com/s/photos/idea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
const mainCard2 = document.createElement('div');
mainCard2.classList.add('introtext');
mainCard2.innerHTML = '<h1>To Do</h1>';
const mainCard4 = document.createElement('div');
mainCard4.classList.add('mainCard2');
mainCard4.innerHTML = '';


const copyref = document.createElement('div');
copyref.classList.add('ref');
copyref.innerHTML = '<p> Copyright © Srdjan Malicevic';

const mainCard = document.createElement('div');
mainCard.classList.add('mainCard');



const menubut = document.createElement('button');
const aboutbut = document.createElement('button');
const contactbut = document.createElement('button');
footer.classList.add('footer');

menubut.classList.add('Restbut');
aboutbut.classList.add('Restbut');
contactbut.classList.add('Restbut');


aboutbut.innerText = 'Completed';
menubut.innerText = 'Current List';
contactbut.innerText = 'Upcoming';



page.appendChild(header);
page.appendChild(maintent);
page.appendChild(footer);

maintent.appendChild(mainCard);
mainCard.appendChild(mainCard2);
mainCard.appendChild(mainCard4);
maintent.appendChild(copyref);


header.appendChild(menubut);
header.appendChild(aboutbut);
header.appendChild(contactbut);
header.appendChild(mainCard3);

menubut.setAttribute('id','menubut');
aboutbut.setAttribute('id','aboutbut');
contactbut.setAttribute('id','contactbut');
}

export { pageLoad };