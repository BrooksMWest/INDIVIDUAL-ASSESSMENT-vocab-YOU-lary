import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

// create a form for creating and updating a vocabulary word - it needs three fields - title, Definition, Language/Tech
const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">New Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter New Vocabulary word" value="${obj.word || ''}" required>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <textarea class="form-control" placeholder="category" id="category" style="height: 100px">${obj.category || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="description" id="descr" style="height: 100px">${obj.category || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Book Price" value="${obj.price || ''}" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Book
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addWordForm;
