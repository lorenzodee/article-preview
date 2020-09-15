document.addEventListener('click', (event) => {
  if (event.target.matches('[data-toggle]')) {
    const element = event.target;
    const targetElement = document.querySelector(element.dataset.toggle);
    if (targetElement && element.dataset.toggleClass) {
      targetElement.classList.toggle(element.dataset.toggleClass);
    }
  }
});
