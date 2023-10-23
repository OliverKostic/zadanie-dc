
const showBanner = (elem) => {
  const banner = document.getElementsByClassName('banner')[0];
  banner.classList.remove('not-visible');
  banner.classList.add('is-visible');
};

const hideBanner = (elem) => {
  const banner = document.getElementsByClassName('banner')[0];
  banner.classList.remove('is-visible');
  banner.classList.add('not-visible');
};

var nextPicture = () => {
  const slidesContainer = document.getElementsByClassName('slides-container')[0];
  const slideWidth = slidesContainer.children[0].clientWidth;
  const containerWidth = slidesContainer.clientWidth;
  const offset = (containerWidth - slideWidth - 40) / 2;
  slidesContainer.style.left = (offset - slideWidth - 20 - slideWidth) + 'px';
  slidesContainer.style.transition = '2s';

}

const rotateSlides = () => {
  const slidesContainer = document.getElementsByClassName('slides-container')[0];
  const firstSlide = slidesContainer.children[0];
  slidesContainer.removeChild(firstSlide);
  slidesContainer.appendChild(firstSlide);
  const slideWidth = firstSlide.clientWidth;

  const containerWidth = slidesContainer.clientWidth;
  const offset = (containerWidth - slideWidth - 40) / 2;
  slidesContainer.style.left = offset - slideWidth + 'px';
  slidesContainer.style.transition = 'none';
}

const init = () => {
  const slidesContainer = document.getElementsByClassName('slides-container')[0];
  const slideWidth = slidesContainer.children[0].clientWidth;
  const containerWidth = slidesContainer.clientWidth;
  const offset = (containerWidth - slideWidth - 40) / 2;
  slidesContainer.style.left = offset - slideWidth + 'px';

  slidesContainer.addEventListener('transitionend', rotateSlides);

  setInterval(() => {
    nextPicture();
  }, 5000);

  setTimeout(() => {
    showBanner();
  }, 3000);
}







