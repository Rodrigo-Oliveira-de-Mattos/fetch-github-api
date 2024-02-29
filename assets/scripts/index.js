import { getUser } from "/assets/scripts/services/user.js";
import { getRepos } from "/assets/scripts/services/repos.js";
import { getEvents } from "/assets/scripts/services/events.js";
import { user } from "/assets/scripts/objects/user.js";
import { screen } from "/assets/scripts/objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if (validateEmptyInput(userName)) return;
  // manda o usuario
  getUserData(userName);
});

// busca com enter                              // quando uma tecla é clicada
document.getElementById("input-search").addEventListener("keyup", (e) => {
  // valor do input
  const userName = e.target.value;
  // guarda o valor da tecla que foi clicada
  const key = e.which || e.keyCode;
  // verifica se a tecla clicada é a 13
  const isEnterKeyPressed = key === 13;
  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
  }
});

function validateEmptyInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário do GitHub");
    return true;
  }
}

// recebe o usuario
async function getUserData(userName) {
  const userResponse = await getUser(userName);

  if (userResponse.message === "Not Found") {
    screen.renderNotFound()
    return
  }

  const repositoriesResponse = await getRepos(userName);
  // salva os dados dos events
  const eventsResponse = await getEvents(userName);

  // organiza os dados
  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  user.setEvents(eventsResponse);

  screen.renderUser(user);
}
