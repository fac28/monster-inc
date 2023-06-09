/* Function to display which header to insert based on screen size */

function displayHeader () {

  if (window.innerWidth < 684) {
    fetch('./components/mobile-header.html')
    .then(response => response.text())
    .then(data => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      headerPlaceholder.innerHTML = data;
    });
  } else {
    fetch('./components/header.html')
      .then(response => response.text())
      .then(data => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        headerPlaceholder.innerHTML = data;
    });
  }
}

/* Function call */

displayHeader();

/* Inserting footer component */

fetch('./components/footer.html')
.then(response => response.text())
.then(data => {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  footerPlaceholder.innerHTML = data;
});

/* Event listener for resizing screen */

  window.addEventListener('resize', displayHeader);
