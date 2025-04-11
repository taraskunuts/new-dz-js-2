const sliderInput = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
const resizeImage = _.throttle((value) => {
  image.style.width = `${value * 3}px`;
  image.style.height = 'auto';
}, 1000);//тротл як і на уроці спрацьовує багато разів
sliderInput.addEventListener('input', (event) => {
  resizeImage(event.target.value);
});

const box = document.getElementById('box');
const moveBox = _.debounce((cordinateX, cordinateY) => {
  box.style.left = `${cordinateX}px`;
  box.style.top = `${cordinateY}px`;
}, 1000);//a дебаунс працює як і на уроці нормально тільки треба не рухати мишку 1 секунду
document.addEventListener('mousemove', (event) => {
  moveBox(event.clientX, event.clientY);
});
