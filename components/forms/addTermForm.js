import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

// create a form for creating and updating a vocabulary word - it needs three fields - title, Definition, Language/Tech
const addTermForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-term--${obj.firebaseKey}` : 'submit-term'}" class="mb-4">
      <div class="form-group">
        <label for="title">New Term</label>
        <input type="text" class="form-control" id="title" aria-describedby="term" placeholder="Enter New Vocabulary word" value="${obj.term || ''}" required>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <textarea class="form-control" placeholder="category" id="category" style="height: 100px">${obj.category || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="description" id="descr" style="height: 100px">${obj.category || ''}</textarea>
      </div>
      <div class="form-group" id="select-category">
      </div>
      <button type="submit" class="btn btn-primary">Submit Term
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addTermForm;
