'use strict';
// Select elements and assign them into variables
const btnsModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btncloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Show modal window and overlay when buttons are clicked
for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener('click', openModal);
}

// Disappear modal window and overlay when closeModal button is clicked
btncloseModal.addEventListener('click', closeModal);

// Disappear modal window and overlay when overlay is clicked
overlay.addEventListener('click', closeModal);

// Close modal when Escape key is press down
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
