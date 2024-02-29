// cria o html com todas as informações que iremos usar

const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    // edita o html com as informações criadas
    this.userProfile.innerHTML = `
    <div class="info">
        <img src="${
          user.avatarUrl ?? "Não possui avatar"
        }" alt="Foto do perfil do usuário" />
        <div class="data">
            <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
            <p>${user.bio ?? "Não possui bio cadastrada"}</p>
            <p>Seguidores: ${
              user.followers ?? "Não possui essa informação cadastrada"
            }</p>
            <p>Seguindo: ${
              user.following ?? "Não possui essa informação cadastrada"
            }</p>
        </div>
    </div>`;

    let repositoriesItems = "";
    user.repositories.forEach((repo) => {
      repositoriesItems += `
        <li>
          <a href="${repo.html_url}" target="_blank">${repo.name}<br>
            <span>🍴${repo.forks}</span>
            <span>⭐${repo.stargazers_count}</span>
            <span>👀${repo.watchers}</span>
            <span>🌅${repo.language}</span>
          </a>
        </li>`;
      console.log(repo);
    });

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItems}</ul>
        </div>`;
    }

    // no processo de adicionar na tela
    let eventsItems = "";
    // para cada evento individualmente
    user.events.forEach((event) => {
      // se for do tipo createevent, não tem mensagem
      if (event.type === "CreateEvent") {
        eventsItems += `<li><strong>${event.repo.name} </strong> - CreateEvent</li>`;
      } else if (event.type === "PushEvent") {
        // mensagem para o rodrigo do futuro: testa se funciona
        // se for do tipo pushevent tem mensagem
        eventsItems += `<li><strong>${event.repo.name} </strong> - ${event.payload.commits[0].message}</li>`;
      } else {
        // mensagem para o rodrigo do futuro: testa se funciona
        return;
      }
    });

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events section">
            <h2>Eventos</h2>
            <ul>${eventsItems}</ul>
        </div>`;
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};

export { screen };

//
