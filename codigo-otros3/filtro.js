// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "/zapato-rojo.jpg"}
];/* se agrega ; y se corrige la ruta de las imagenes */
/* se cambia el nombre de la variable li a  listaDeProductos*/
const listaDeProductos = document.getElementById("lista-de-productos"); /* cambie la instruccion de getElementByName a getElementById */
const entrada = document.querySelector('.input');/* cambio el nombre de la variable para diferenciarloo de i del for */

function displayProductos(productos){ /* se crea la funcion displayProductos*/
for (let i = 0; i < productos.length; i++) {
  let contenedorDiv = document.createElement("div"); /* se redefine la variable usando let y se agrega ;*/
  contenedorDiv.classList.add("producto");/* se cambia el nombre de d a contenedorDiv */
/* se cambia el nombre de ti a tituloDeTarjeta */
  let tituloDeTarjeta = document.createElement("p");/* se redefine la variable usando let y se agrega ;*/
  tituloDeTarjeta.classList.add("titulo");
  tituloDeTarjeta.textContent = productos[i].nombre;
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  contenedorDiv.appendChild(tituloDeTarjeta);
  contenedorDiv.appendChild(imagen);


  listaDeProductos.appendChild(contenedorDiv);
}
}
displayProductos(productos);
const botonDeFiltro = document.querySelector("button");
const botonVerTodo=document.getElementById("botonVerTodo");

//Se agrega la funcion para ver todos los elementos
botonVerTodo.addEventListener("click", function(){
  /* Linea para limpiar el Dom */
  listaDeProductos.innerHTML="";
  displayProductos(productos);
});


botonDeFiltro.onclick = function() {
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }
/* Se cambia la declaracion de const a let para poder reasignar su valor */
  let texto =entrada.value;
  texto=texto.toLowerCase();/* se usa el metodo para que se pueda ingresar mayusculas */
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let contenedorDiv = document.createElement("div");
    contenedorDiv.classList.add("producto");
  
    let  tituloDeTarjeta = document.createElement("p");
    tituloDeTarjeta.classList.add("titulo");
    tituloDeTarjeta.textContent = productosFiltrados[i].nombre;
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    contenedorDiv.appendChild(tituloDeTarjeta);
    contenedorDiv.appendChild(imagen);
  
    listaDeProductos.appendChild(contenedorDiv);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));


}  