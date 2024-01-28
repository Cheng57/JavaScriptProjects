'use strict';
// Select elements and assign them into variables
const btnsModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Show modal window and overlay when buttons are clicked
for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Disappear modal window and overlay when closeModal button is clicked
closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Disappear modal window and overlay when overlay is clicked
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
