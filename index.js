// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 4000);
// }

document.getElementById('open-modal').addEventListener('click', function() {
    document.querySelector('.modal-bg').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
  });
  
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.modal-bg').style.display = 'none';
  document.querySelector('body').style.overflow = 'unset';
});

// const modalForm = document.getElementById('modal-form');

// modalForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log('form has been submitted');
// });
