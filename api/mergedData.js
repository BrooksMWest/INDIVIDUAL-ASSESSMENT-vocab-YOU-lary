import { getSingleTerm, deleteTerm } from './termData';
import { getCategoryTerms, getSingleCategory, deleteSingleCategory } from './categoryData';
// for merged promises
// TODO: Get data for viewBook
const getTermDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE TERM
  getSingleTerm(firebaseKey).then((termObject) => { // returns single term object
    getSingleCategory(termObject.categor_id) // we nest this promise so that we can use the term object
      .then((categoryObject) => resolve({ ...termObject, categoryObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

const getCategoryDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE Category
  getSingleCategory(firebaseKey).then((categoryObject) => {
    getCategoryTerms(categoryObject.firebaseKey)
      .then((termArray) => resolve({ ...categoryObject, termArray })); // returns single book object
    // we nest this promise so that we can use the term object getcategoryterms
  }).catch(reject);
  // GET Category
  // Create an object that has term data and an object named categoryObject
});

const deleteCategoryTermRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getCategoryTerms(firebaseKey).then((categoryTermsArray) => {
    const deleteTermPromises = categoryTermsArray.map((term) => deleteTerm(term.firebaseKey));

    Promise.all(deleteTermPromises).then(() => {
      deleteSingleCategory(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getCategoryDetails, getTermDetails, deleteCategoryTermRelationship };
