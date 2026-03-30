const actionButton = document.getElementById('actionButton');
const message = document.getElementById('message');

actionButton.addEventListener('click', () => {
  message.textContent = 'Hello! Your HTML project is ready.';
});
