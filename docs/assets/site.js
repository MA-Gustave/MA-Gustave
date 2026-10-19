'use strict';
const menu = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-mainnav]');
if(menu && nav){menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));menu.textContent=opened?menu.dataset.close:menu.dataset.open;});}
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
