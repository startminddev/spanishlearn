// OPEN&CLOSE MODAL 1

const closeModalButton = document.getElementById('closeModal');

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');

});

// OPEN&CLOSE MODAL 2

const modalButton = document.getElementById('modalButton');
const modal = document.getElementById('modal');
const closeProfessorsModal = document.getElementById('closeProfessorsModal');
const professorsLink = document.getElementById('professorsLink');
const professorsModal = document.getElementById('professorsModal');

modalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');

});

closeProfessorsModal.addEventListener('click', () => {
    professorsModal.classList.add('hidden');

});

professorsLink.addEventListener('click', () => {
    professorsModal.classList.remove('hidden');

});