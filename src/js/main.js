const nav = document.querySelector('#navigation');

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

// Finding input in the document
let fields = [
  document.getElementsByTagName('input'),
  document.getElementsByTagName('textarea')
];

for (var a = fields.length, i = 0; i < a; i++) {
  for (var b = fields[i].length, j = 0; j < b; j++) {
    // If the field changes
    fields[i][j].addEventListener('change', function(e) {
      if (!e.target.checkValidity()) {
        e.target.classList.add('invalid');
      } else {
        e.target.classList.remove('invalid');
      }
    });
    // If user leaves field:
    fields[i][j].addEventListener('blur', function(e) {
      switch (e.target.name) {
        case 'form__name':
          if (e.target.value.length < 1) {
            e.target.classList.add('invalid');
            break;
          } else {
            e.target.classList.remove('invalid');
          }
          break;
        case 'form__email':
          if (e.target.value.length < 1 || !e.target.checkValidity()) {
            e.target.classList.add('invalid');
            break;
          } else {
            e.target.classList.remove('invalid');
          }
          break;
        case 'form__message':
          if (e.target.value.length < 2) {
            e.target.classList.add('invalid');
            break;
          } else {
            e.target.classList.remove('invalid');
          }
          break;
        default:
          break;
      }
    });
  }
}
// Submitting the contact form
const submitBtn = document.getElementById('form__submit');
const contactName = document.getElementById('form__name');
const contactMessage = document.getElementById('form__message');

if (submitBtn) {
  submitBtn.addEventListener('click', function(e) {
    console.log('click');
  });

  contactMessage.addEventListener('keydown', function(e) {
    console.log(contactMessage.value.length);
    if (contactMessage.value.length >= 1) {
      contactMessage.classList.remove('invalid');
    }
  });
}
