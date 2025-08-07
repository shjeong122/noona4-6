document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('icon_menubar');
  const mobileMenu = document.getElementById('nav_mobile_menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
      } else {
        mobileMenu.style.display = 'none';
      }
    });
  }
});