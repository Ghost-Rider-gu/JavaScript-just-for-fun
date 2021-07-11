const GITHUB_API_URL = 'https://api.github.com/users';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const profileInfo = document.getElementById('profile-info');

searchForm.addEventListener('submit', ev => {
	ev.preventDefault();
	const userName = searchInput.value;

	if (userName) {
		getUser(userName);
		searchInput.value = '';
	}
})

async function getUser(userName) {
	try {
		const {data} = await axios(`${GITHUB_API_URL}/${userName}`);
		createUserProfileCard(data);
		getUserRepos(userName);
	} catch (error) {
		if (error.response.status == 404) {
			createErrorCard('There is no such user. Please try again.');
		}
	}
}

async function getUserRepos(userName) {
	try {
		const {data} = await axios(`${GITHUB_API_URL}/${userName}/repos?sort=created`);
		updateReposOnCard(data);
	} catch (error) {
		if (error.response.status == 404) {
			createErrorCard('Could not get user\'s repositories');
		}
	}
}

function createErrorCard(errorMessage) {
	const errorCard = `
	<div class="user-data">
		<h2>${errorMessage}</h2>
	</div>`;

	profileInfo.innerHTML = errorCard;
}

function createUserProfileCard(userData) {
	const userProfileCard = `
	<div class="user-data">
		<div>
		<a href="${userData.html_url}" class="avatar-link" target="_blank">
	  		<img
			src="${userData.avatar_url}"
			alt="${userData.name}"
			class="user-avatar"
	  		/>
		</a>
		</div>
		<div class="user-info">
	  		<h2>${userData.name}</h2>
	  		<p>${userData.bio}</p>
	  		<ul>
				<li>${userData.followers} <strong>Followers</strong></li>
				<li>${userData.following} <strong>Following</strong></li>
				<li>${userData.public_repos} <strong>Repos</strong></li>
	  		</ul>
	  		<div id="user-repos"></div>
		</div>
	</div>`;

	profileInfo.innerHTML = userProfileCard;
}

function updateReposOnCard(reposData) {
	const userRepos = document.getElementById('user-repos');

	reposData.slice(0, 5).forEach(repo => {
		const repoLink = document.createElement('a');
		repoLink.classList.add('repo-link');
		repoLink.innerText = repo.name;
		repoLink.href = repo.html_url;
		repoLink.target = '_blank';

		userRepos.appendChild(repoLink);
	});
}
