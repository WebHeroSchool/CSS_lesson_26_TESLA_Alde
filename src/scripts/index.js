window.onload = function() {
    var btnScrollDown = document.querySelector('.down__img');

    let scroll = function () {return scrollBy({top: 920, left: 0, behavior: "smooth"})};
  
    btnScrollDown.addEventListener('click', scroll);
}