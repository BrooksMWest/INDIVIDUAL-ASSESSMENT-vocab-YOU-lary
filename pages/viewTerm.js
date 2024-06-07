import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewTerm = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">

     <div class="mt-5">
       <i id="edit-term-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info">Edit Term</i>
       <i id="delete-term--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete Term</i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.term} by ${obj.categoryObject.name} ${obj.authorObject.isLanguage ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     <h5>${obj.term} by ${obj.categoryObject.name} ${obj.authorObject.isTech ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
  
     <p>${obj.description || ''}</p>
     <hr>
     <p>${obj.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
       $${obj.price}` : `$${obj.price}`}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewTerm;
