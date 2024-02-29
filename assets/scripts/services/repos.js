import{baseUrl, repositoriesQuantity} from '/assets/scripts/variables.js';

async function getRepos(userName) {
    const response = await fetch(
      `${baseUrl}${userName}/repos?per_page=${repositoriesQuantity}`
    );
    return await response.json();
  }

export{ getRepos }