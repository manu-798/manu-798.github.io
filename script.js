const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});

const filterButtons = document.querySelectorAll('.filter-button');
const projectBoxes = document.querySelectorAll('.project-box');
const h2Tags = document.querySelectorAll('h2.proj_type');
// Loop through each filter button and add a click event listener
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the filter category from the button's data-filter attribute
    const filterCategory = button.dataset.filter;

    // Loop through each project box and hide/show based on category
    projectBoxes.forEach(box => {
      if (filterCategory === 'all' || box.dataset.category === filterCategory) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });

    // Hide the 'Featured Projects' heading
    if (filterCategory === 'all') {
      h2Tags.forEach(tag => tag.style.display = 'block');
    } else {
      h2Tags.forEach(tag => tag.style.display = 'none');
    }
    
  });
});