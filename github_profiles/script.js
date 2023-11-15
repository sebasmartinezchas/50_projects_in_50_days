const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("No profile with that username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("Problem with fetching the repos");
    }
  }
}
function createUserCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user;

  const cardHTML = `
  <div class="card">
  <div>
    <img
      src=${avatar_url}
      alt="avatar"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${name}</h2>
    <p>
      ${bio}
    </p>
    <ul>
      <li>${followers}<strong>Followers</strong></li>
      <li>${following}<strong>Following</strong></li>
      <li>${public_repos}<strong>Repos</strong></li>
    </ul>
    <div id="repos">
    </div>
  
  </div>

</div> 
  `;
  main.innerHTML = cardHTML;
}
function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.href = repo.html_url;
    repoEl.classList.add("repo");
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
  }

  search.value = "";
});

function createErrorCard(msg) {
  const cardHTML = `
<div class='card'>
<h1>${msg}</h1>
</div>
`;
  main.innerHTML = cardHTML;
}
