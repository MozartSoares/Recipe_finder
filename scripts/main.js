document.addEventListener('DOMContentLoaded', () => {
  console.log('Recipe Finder initialized');

  const searchForm = document.querySelector('.search-box');
  const searchInput = document.querySelector('.search-box input');

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = searchInput.value.trim();

      if (searchTerm) {
        console.log(`Searching for: ${searchTerm}`);
      }
    });
  }

  const categoryCards = document.querySelectorAll('.category-card');

  categoryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const category = card.querySelector('h3').textContent;
      console.log(`Selected category: ${category}`);
    });
  });

  const recipeCards = document.querySelectorAll('.recipe-card');

  recipeCards.forEach((card) => {
    const viewButton = card.querySelector('.btn-view');

    if (viewButton) {
      viewButton.addEventListener('click', (e) => {
        e.preventDefault();
        const recipeName = card.querySelector('h3').textContent;
        console.log(`Viewing recipe: ${recipeName}`);
      });
    }
  });
});
