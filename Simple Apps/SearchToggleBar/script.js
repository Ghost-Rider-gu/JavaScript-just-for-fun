const searchContainer = document.querySelector('.search-container');
const searchButton = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search');

searchButton.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    searchInput.focus();
});
