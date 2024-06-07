import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyTerms = () => {
  const domString = '<h1>No Terms</h1>';
  renderToDOM('#store', domString);
};

const showTerms = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-term-btn">Add A New Term</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.term} alt=${item.term} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-definition">${item.term}</h5>
            <p class="card-text bold">${item.definition}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-term-btn--${item.firebaseKey}">View</i>
            <i id="edit-term-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
            <i id="delete-term-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showTerms, emptyTerms };
