// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.nav-link').forEach(function (element) {
//       element.addEventListener('click', function () {
//         let navbarToggle = document.querySelector('.navbar-toggler');
//         if (!navbarToggle.classList.contains('collapsed')) {
//           navbarToggle.click();
//         }
//       });
//     });
//   });

// document.addEventListener('scroll', function () {
//   let navbarCollapse = document.querySelector('.navbar-collapse');
//   if (navbarCollapse.classList.contains('show')) {
//     navbarCollapse.classList.remove('show');
//   }
// });
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.querySelector('.navbar-toggler');
  const menuLinks = document.querySelectorAll('.nav-link');

  // Функция для скрытия меню
  function hideMenu() {
    if (!navbarToggle.classList.contains('collapsed')) {
      navbarToggle.click();
    }
  }

  // Обработчик клика по ссылке в меню
  menuLinks.forEach(function (element) {
    element.addEventListener('click', hideMenu);
  });

  // Обработчик скролла страницы
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100; // Пороговое значение скролла (в пикселях)

    if (scrollPosition >= scrollThreshold) {
      hideMenu();
    }
  });
});