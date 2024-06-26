import { getTerms, getTermsByCategoryId } from '../api/termData';
import { showTerms } from '../pages/terms';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: ALL  TERMS
  document.querySelector('#all-terms').addEventListener('click', () => {
    getTerms().then(showTerms);
  });
  // GET javascript terms event listener
  document.querySelector('#javascript').addEventListener('click', () => {
    getTermsByCategoryId('Javascript').then(showTerms);
  });
  // GET Python terms event listener
  document.querySelector('#python').addEventListener('click', () => {
    getTermsByCategoryId('Python').then(showTerms);
  });
  // GET CSS terms event listener
  document.querySelector('#css').addEventListener('click', () => {
    getTermsByCategoryId('CSS').then(showTerms);
  });
  // GET Ruby terms event listener
  document.querySelector('#ruby').addEventListener('click', () => {
    getTermsByCategoryId('Ruby').then(showTerms);
  });
  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
