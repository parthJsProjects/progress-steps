import controller from './controller';

// User click Next and Prev
controller.nextButton.addEventListener('click', () => {
  controller.next();
});
controller.prevButton.addEventListener('click', () => {
  controller.prev();
});
