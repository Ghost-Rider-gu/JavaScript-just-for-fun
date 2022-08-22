const movies = document.querySelectorAll('.movie');

movies.forEach(movie => {
    movie.addEventListener('click', () => {
        removeActiveClass();
        movie.classList.add('active');
    })
})

function removeActiveClass() {
    movies.forEach(movie => {
        movie.classList.remove('active');
    })
}
