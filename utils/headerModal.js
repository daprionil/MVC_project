const btnDisplayModal = document.querySelector('#show_modal_btn');
const btnCloseModal = document.querySelector('#close_modal_btn');
const menuModal = document.querySelector('#menu_modal');

document.addEventListener('DOMContentLoaded', initHeader);

function initHeader(){
    btnCloseModal.addEventListener('click',handleModal);
    btnDisplayModal.addEventListener('click',handleModal);
};

function handleModal(){
    menuModal.classList.toggle('hidden')
    menuModal.classList.toggle('flex');
};