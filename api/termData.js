import client from '../utils/client';

// API CALLS FOR TERMS

const endpoint = client.databaseURL;

// TODO: GET TERMS
const getTerms = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE TERM
const deleteTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET SINGLE TERM
const getSingleTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE TERM
const createTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE TERM
const updateTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/terms/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// TODO: FILTER BOOKS ON SALE
// const booksOnSale = () => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/books.json?orderBy="sale"&equalTo=true`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(Object.values(data)))
//     .catch(reject);
// });

// TODO: STRETCH...SEARCH TERMS

export {
  getTerms,
  createTerm,
  deleteTerm,
  getSingleTerm,
  updateTerm
};
