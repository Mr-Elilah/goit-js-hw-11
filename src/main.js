// import iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// handle Submit
const searchFormEl = document.querySelector('.js-search-form');
const onSearchSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();
  if (searchedQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter your request',
      position: 'topRight',
    });
    return;
  }
};
searchFormEl.addEventListener('submit', onSearchSubmit);

// search-input box-shadow
const input = document.querySelector('.search-input');

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    input.classList.remove('empty');
    input.classList.add('filled');
  } else {
    input.classList.remove('filled');
    input.classList.add('empty');
  }
});
