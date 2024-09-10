document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(function (element) {
      element.addEventListener('click', function () {
        let navbarToggle = document.querySelector('.navbar-toggler');
        if (!navbarToggle.classList.contains('collapsed')) {
          navbarToggle.click();
        }
      });
    });
  });