

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/* se caMBIARA EL NOMBRE DE LAS VARIABLES PARA LEGIBILIDAD
n por nombre b por  blog l por  location */
const nombre = document.querySelector('.name');// se agrega un .para indicar que es una clase
const blog = document.querySelector('.blog'); //se remplaxa un # por un . porque es una clase
const location = document.querySelector('.location');


/* como se usa una promesa se debe agregar async detras de la funcion */
async function displayUser(username) {
  nombre.textContent = 'cargando...';
 try{
  
const response = await fetch(`${usersEndpoint}/${username}`);
 
const responseObj=await response.json();

     nombre.textContent = responseObj.name;//se cambia '${data.name}' por el objeto y la propiedad
     blog.textContent = responseObj.blog;//se cambia '${data.blog}' por el objeto y syu propiedad
     location.textContent = responseObj.location;//se cambia '${data.location}' por el objeto y su propiedad 
 }catch (error){
  handleError(error);

 }
    //nombre.textContent = '${data.name}';
    
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nombre.textContent = `Algo salió mal: ${err}`;
}

/* inicio de ejecucion */
// le puse then para manejar la promesa 
/* displayUser('stolinski')
.then()
.catch(handleError); */
//displayUser('octocat');
/* la siguiente funcion se activa cuando presiona el boton de busqueda en el HTML */
function recopilaDatosDeHTML()

{
let nomb= document.getElementById("nom").value;//  obtiene el valor del selector el cual representa un nombre
if(nomb){
  displayUser(nomb);
}if(nomb=="none"){//mensaje de alerta para un valor vacio 
  alert("Ingrese un nombre para buscar");
}


}

//en la consola me marcaba el problema que la funcion no estaba definida y que no la encontraba
//entonces como se estan trabajando con modulos la asocie con el objeto global usando el objeto window
window.recopilaDatosDeHTML=recopilaDatosDeHTML;
