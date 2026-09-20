document.querySelectorAll('.workflow-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.workflow-item').forEach((step) => step.classList.remove('active'));
    item.classList.add('active');
  });
});