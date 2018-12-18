let button = document.querySelector('.down__btn');
let target = document.querySelector('.second');

button.addEventListener('click', function() {
  target.scrollIntoView({behavior: 'smooth'});
});