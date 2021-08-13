const urlPath = 'https://randomuser.me/api?results=80';
const userLists = document.getElementById('users');
const filterData = document.getElementById('filter');
const listItems = [];

getUsers();

filterData.addEventListener('input', (e) => userFilter(e.target.value));

async function getUsers() {
    const result = await fetch(urlPath);
    const { results } = await result.json();

    userLists.innerHTML = '';

    results.forEach(user => {
        const newLi = document.createElement('li');
        listItems.push(newLi);

        newLi.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        userLists.appendChild(newLi);
    })
}

function userFilter(search) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}
