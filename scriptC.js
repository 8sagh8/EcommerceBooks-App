/*-----------------------------------
  Name- Dure Shawar Abbas
  Studentid- 010109148
  email - dsnotapplicable@myseneca.ca
  Final Assignment  
  Link:    https://web222-final-assignment.dure-shawar-abbas.vercel.app/ 
  
-------------------------------------*/
/* Add any JavaScript you need to this file. */

//////Validation function///////

window.onload = function() {
  let contactUs_form = document.querySelector('#contactUs-form');

  // run this function when user submits the form to check if valid
  contactUs_form.onsubmit = function(event) {
    if (!contactUs_form.checkValidity()) {
      contactUs_form.addEventListener('was validated');

      event.preventDefault();
      return false;
    }
    return true;
  };
};

////////Order Problem///////////////
let option_orderProblem = document.querySelector('#option-orderProblem');

let orderNumberDisplay = () => {
  let displayOrder = document.getElementById('order-number');
  displayOrder.style.display = 'block';
};

option_orderProblem.addEventListener('click', orderNumberDisplay);

let option_question = document.querySelector('#option-question');

let orderNumberHide = () => {
  let displayOrder = document.getElementById('order-number');
  displayOrder.style.display = 'none';
};

option_question.addEventListener('click', orderNumberHide);
