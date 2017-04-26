(function() {
  document.getElementById("signup").addEventListener('click', openModal);
})();

function openModal(e) {
  e.preventDefault();

  var modal = document.getElementById("modal");
  modal.classList.remove('hidden');
}
