'use strict';

//Declare variables
let showModalButtons = document.querySelectorAll('.show-modal');
let modals = document.querySelectorAll('.modal');
let closeModalButtons = document.querySelectorAll('.close-modal');

//===================== Method 1===========================
//show buttons
showModalButtons.forEach((showbtn, modalIndex) =>
  showbtn.addEventListener('click', () => openModal(modalIndex))
);

//close buttons
closeModalButtons.forEach((closebtn, modalIndex) =>
  closebtn.addEventListener('click', () => closeModal(modalIndex))
);

//open
function openModal(index) {
  modals[index].classList.remove('hidden');
}

//close
function closeModal(index) {
  modals[index].classList.add('hidden');
}

//close modal through **overlay**

window.addEventListener('click', e => {
  if (e.target.className === 'modal') {
    e.target.classList.add('hidden');
  }
});
