import { deleteTerm, getTerms, getSingleTerm } from '../api/termData';
import { showTerms } from '../pages/terms';
import addTermForm from '../components/forms/addTermForm';
// import viewTerm from '../pages/viewTerm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    //  CLICK EVENT FOR DELETING A TERM
    if (e.target.id.includes('delete-term')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE TERM', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        // console.warn(e.target.id.split('--'));
        deleteTerm(firebaseKey).then(() => {
          getTerms().then(showTerms);
        });
      }
    }
    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A TERM
    if (e.target.id.includes('add-term-btn')) {
      addTermForm();
      // console.warn('ADD TERM', e.target.id);
      // console.warn(e.target.id.split('--'));
    }

    // TODO: CLICK EVENT EDITING/UPDATING A TERM
    if (e.target.id.includes('edit-term-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then((termObj) => addTermForm(termObj));
      // console.warn('EDIT BOOK', e.target.id);
      // console.warn(e.target.id.split('--'));
    }
    // TODO: CLICK EVENT FOR TERM BOOK DETAILS

    // if (e.target.id.includes('view-term-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getTermDetails(firebaseKey).then(viewTerm);
    // console.warn('VIEW TERM', e.target.id);
    // console.warn(e.target.id.split('--'));
    // }

    // FIXME: ADD CLICK EVENT FOR DELETING A CATEGORY
    // if (e.target.id.includes('delete-category-btn')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     const [, firebaseKey] = e.target.id.split('--');
    //     deleteCategoryTermRelationship(firebaseKey).then(() => {
    //       getCategories().then(showCategories);
    //     });
    // console.warn('DELETE CATEGORY', e.target.id);
    //   // console.warn(e.target.id.split('--'));
    //   }
    // }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A CATEGORY
    // if (e.target.id.includes('add-category-btn')) {
    //   addCategoryForm();
    // console.warn('ADD CATEGORY');
    // }
    // FIXME: ADD CLICK EVENT FOR EDITING A CATEGORY
    // if (e.target.id.includes('edit-category-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getSingleCategory(firebaseKey).then((categoryObj) => addCategoryForm(authorObj));
    // }

    // TODO: CLICK EVENT FOR VIEW CATEGORY DETAILS
    // if (e.target.id.includes('view-Category-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getCategoryDetails(firebaseKey).then(viewCategory);
    // console.warn('VIEW TERM', e.target.id);
    // console.warn(e.target.id.split('--'));
    // }
  });
};

export default domEvents;
