// //JAVASCRIPT FRONTEND AND EDITOR

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navigation = document.querySelector('.navigation');

  if (burgerMenu && navigation) {
    function toggleMenu() {
      const isOpen = navigation.classList.toggle('active');
      burgerMenu.classList.toggle('active');

      //Bloqueo de scroll
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    burgerMenu.addEventListener('click', toggleMenu);

    burgerMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') toggleMenu();
    });

    // Esc para cerrar
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navigation.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navigation.classList.remove('active');
        document.body.style.overflow = ''; //Reactivar scroll
      }
    });
  }
});
