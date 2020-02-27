// Dropdown Menu
const dropdown = document.querySelectorAll('.dropdown');
const dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function(el) {
  let button = el.querySelector('h4[data-toggle="dropdown"]'),
    menu = el.querySelector('.dropdown-list'),
    arrow = button.querySelector('span.icon-plus');

  button.onclick = function(event) {
    if (!menu.classList.contains('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    } else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  };
});
