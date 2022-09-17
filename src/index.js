import _ from 'lodash';
import './style.css';

import { pageLoad, todolistform } from './mainpage.js';
import { menu } from './menu.js';
import { createItem, listInit, appendItem } from './listlog.js'
import { mainlist } from './mainlist.js';
import { contact } from './contact.js';
console.log("test24");
pageLoad();
todolistform();
let list = listInit();

const menubut = document.querySelector('#menubut')
const refr = document.querySelector('.mainCard')

menubut.addEventListener('click', function(e){
    const currnode = document.querySelector('.mainCard2');
    currnode.remove();
    mainlist();
const itemaddbut = document.querySelector('.addbut')

itemaddbut.addEventListener('click', function(e){
    let item = createItem('test');
    appendItem(item,list);
});
});

const aboutbut = document.querySelector('#aboutbut')
aboutbut.addEventListener('click', function(e){
    const currnode = document.querySelector('.mainCard2');
    currnode.remove();
    mainlist();
});

const contactbut = document.querySelector('#contactbut')
contactbut.addEventListener('click', function(e){
    const currnode = document.querySelector('.mainCard2');
    currnode.remove();
    contact();
});