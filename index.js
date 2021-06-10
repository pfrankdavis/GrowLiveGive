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
//   setTimeout(carousel, 6000);
// }

document.getElementById('open-modal').addEventListener('click', function() {
    document.querySelector('.modal-bg').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
  });
  
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.modal-bg').style.display = 'none';
  document.querySelector('body').style.overflow = 'unset';
});
