const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < (window.innerHeight / 5) * 4) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
});
