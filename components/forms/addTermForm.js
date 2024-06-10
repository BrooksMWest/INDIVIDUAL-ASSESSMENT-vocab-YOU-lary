import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

// create a form for creating and updating a vocabulary word - it needs three fields - title, Definition, Language/Tech
const addTermForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-term--${obj.firebaseKey}` : 'submit-term'}" class="mb-4">
      <div class="form-group">
        <label for="title">New Term</label>
        <input type="text" class="form-control" id="term" aria-describedby="term" placeholder="Enter New Vocabulary word" value="${obj.term || ''}" required>
      </div>
      <div class="form-group">
        <label for="category">Programming Language</label>
        <textarea class="form-control" placeholder="category" id="category_id" style="height: 100px">${obj.CategoryId || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="description" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-category">
      </div>
      <button type="submit" class="btn btn-primary">Submit Term
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addTermForm;
