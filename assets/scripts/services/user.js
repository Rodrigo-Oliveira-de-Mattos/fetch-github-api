import{baseUrl} from '../variables.js';

// para usar await
async function getUser(userName) {
    // espera até que a busca esteja completa     // busca o usuario
    const response = await fetch(`${baseUrl}${userName}`);
    // retorna os dados em um objeto
    return await response.json();
  }

export { getUser }