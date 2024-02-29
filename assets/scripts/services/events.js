import{baseUrl, repositoriesQuantity} from '/assets/scripts/variables.js';

// puxa a url dos events
async function getEvents(userName) {
    const response = await fetch(
      `${baseUrl}${userName}/events?per_page=${repositoriesQuantity}`
    );
    return await response.json();
  }

export{ getEvents }

// adicionando a quantidade de eventos
// no processo da solicitação 2
// a lista ja aparece