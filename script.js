'use strict';

//Declare variables
let showModalButtons = document.querySelectorAll('.show-modal');
let modals = document.querySelectorAll('.modal');
let closeModalButtons = document.querySelectorAll('.close-modal');

//===================== Method 1====================================

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

//show buttons
showModalButtons.forEach((showbtn, modalIndex) =>
  showbtn.addEventListener('click', () => openModal(modalIndex))
);

//close buttons
closeModalButtons.forEach((closebtn, modalIndex) =>
  closebtn.addEventListener('click', () => closeModal(modalIndex))
);

//esc button
document.addEventListener('keyup', e => {
  for (const modal of modals) {
    if (e.code === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }
});

//===================== Method 2===========================
//show button

// showModalButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     let modal = btn.getAttribute('data-model');
//     document.getElementById(modal).classList.remove('hidden');
//   });
// });
//close button

// closeModalButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     btn.closest('.modal').classList.add('hidden');
//   });
// });

//close modal through **overlay**

// window.addEventListener('click', e => {
//   if (e.target.className === 'modal') {
//     e.target.classList.add('hidden');
//   }
// });
