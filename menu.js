const closemenu = document.getElementById('close-menu');
const openmenu = document.getElementById('open-menu');
const menu = document.getElementById('#menu-links');

function togglemenu(){
    menu.classList.toggle('displaymenu');
}

openmenu.addEventListener('click', togglemenu);
closemenu.addEventListener('click', togglemenu);