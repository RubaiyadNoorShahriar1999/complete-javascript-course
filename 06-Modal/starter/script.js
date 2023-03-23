'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const openModalFunc = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const removeModalFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', openModalFunc);
}

closeModal.addEventListener('click', removeModalFunc);
overlay.addEventListener('click', removeModalFunc);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    removeModalFunc();
  }
});
