import { getCategories, updateCategory, createCategory } from '../api/categoryData';
import { createTerm, updateTerm, getTerms } from '../api/termData';
import { showTerms } from '../pages/terms';
import { showCategories } from '../pages/categories';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A TERM
    if (e.target.id.includes('submit-term')) {
      const payload = {
        CategoryId: document.querySelector('#category_id').value,
        definition: document.querySelector('#definition').value,
        term: document.querySelector('#term').value,
      };
      // console.warn('CLICKED SUBMIT TERM', e.target.id);

      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getTerms().then(showTerms);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A TERM
    if (e.target.id.includes('update-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        CategoryId: document.querySelector('#category_id').value,
        definition: document.querySelector('#definition').value,
        term: document.querySelector('#term').value,
        firebaseKey,
      };
      updateTerm(payload).then(() => {
        getTerms().then(showTerms);
      });
    }

    // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING a category
    if (e.target.id.includes('submit-catergory')) {
      const payload = {
        name: document.querySelector('#name').value,
        is_tech: document.querySelector('#is_tech').checked,
        is_language: document.querySelector('#is_language').checked,
        // favorite: document.querySelector('#favorite').checked,
      };

      createCategory(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        // console.warn('CLICKED SUBMIT AUTHOR');
        updateCategory(patchPayload).then(() => {
          getCategories().then(showCategories);
        });
        // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
      });
    }
    if (e.target.id.includes('update-category')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        is_tech: document.querySelector('#is_tech').checked,
        is_language: document.querySelector('#is_language').checked,
        firebaseKey,
      };

      updateCategory(payload).then(() => {
        getCategories().then(showCategories);
      });
    }
  });
};

export default formEvents;
