const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const Pcontainer=document.getElementsByClassName('pContainer')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  Pcontainer.style.marginTop='70px';

}
)