let index = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "block";  
  setTimeout(carousel, 6000);
}

document
  .getElementById('open-modal')
  .addEventListener('click', 
    function() {
      document
        .querySelector('.modal-bg')
        .style
        .display = 'flex';
      document
        .querySelector('body')
        .style.overflow = 'hidden';
  });
  
document
  .querySelector('.close')
  .addEventListener('click', 
    function() {
      document
        .querySelector('.modal-bg')
        .style
        .display = 'none';
      document
      .querySelector('body')
      .style
      .overflow = 'unset';
});
