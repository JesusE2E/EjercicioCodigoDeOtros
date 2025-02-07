

const baseEndpoint = 'https://api.github.com';//se define una variable que es una url tipo string
const usersEndpoint = `${baseEndpoint}/users`;//se le agrega /users
/* se caMBIARA EL NOMBRE DE LAS VARIABLES PARA LEGIBILIDAD
nombre nombre blog blog location location */
const nombre = document.querySelector('name');
const blog = document.querySelector('#blog');
const location = document.querySelector('.location');


/* como se usa una promesa se debe agregar async detras de la funcion */
async function displayUser(username) {
  nombre.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  nombre.textContent = '${data.name}';
 blog.textContent = '${data.blog}';
  location.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

/* inicio de ejecucion */
displayUser('stolinski').catch(handleError);