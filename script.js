'use strict';

const showModals = document.querySelectorAll('.show-modal');
const closeModals = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');

// function to open modal
const openModal = function (modelId) {
  const model = document.querySelector(
    `.modal-${modelId.getAttribute('data-modal')}`
  );
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function to open modal
const colseModal = function () {
  const modal = document.querySelector('.modal:not(.hidden)');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModals.forEach(el => {
  el.addEventListener('click', function () {
    openModal(el);
  });
});

// close modal
closeModals.forEach(el => {
  el.addEventListener('click', colseModal);
});

overlay.addEventListener('click', colseModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') colseModal();
});
