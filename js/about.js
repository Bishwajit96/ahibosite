$(document).ready(function () {
  const accordionToggle = document.querySelectorAll('.accordion-toggle');

  accordionToggle.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      this.classList.toggle('collapsed');
      const content = this.nextElementSibling;
      const contentHeight = content.scrollHeight;

      if (content.classList.contains('show')) {
        content.style.maxHeight = contentHeight + 'px';
        setTimeout(() => {
          content.style.maxHeight = '0';
          content.classList.remove('show');
        }, 300);
      } else {
        content.style.maxHeight = '0';
        content.classList.add('show');
        setTimeout(() => {
          content.style.maxHeight = contentHeight + 'px';
        }, 10);
      }
    });
  });
})