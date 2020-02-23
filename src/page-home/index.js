import '../scss/main.scss';
import './home.scss';

const chevron = document.querySelector('a.intro__chevron-wrapper-anchor');
const intro = document.querySelector('.intro__main');

if (chevron) {
  chevron.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: intro.getBoundingClientRect().top - 45,
      behavior: 'smooth'
    });
  });
}
