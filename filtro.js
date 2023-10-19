
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/zapato-rojo.jpg"}
]

// Se cambio el nombre de las variables
// Se cambio getElementByName por getElementById
const listaProdudctos = document.getElementById("lista-de-productos")
// Se quito el punto porque no hay clase input
const input = document.querySelector('input');

for (let i = 0; i < productos.length; i++) {
  var divProducto = document.createElement('div');
  divProducto.classList.add('producto');

  var titulo = document.createElement('p');
  titulo.classList.add('titulo');
  titulo.textContent = productos[i].nombre
  
  var imagen = document.createElement('img');
  imagen.setAttribute('src', productos[i].img);

  divProducto.appendChild(titulo)
  divProducto.appendChild(imagen)

  listaProdudctos.appendChild(divProducto)
}

// se elimino porque no se ocupe
// displayProductos(productos)
const botonDeFiltro = document.querySelector('button');

botonDeFiltro.onclick = function() {
  while (listaProdudctos.firstChild) {
    listaProdudctos.removeChild(listaProdudctos.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var divProducto = document.createElement('div')
    divProducto.classList.add('producto')
  
    var titulo = document.createElement('p')
    titulo.classList.add('titulo')
    titulo.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement('img');
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    divProducto.appendChild(titulo)
    divProducto.appendChild(imagen)
  
    listaProdudctos.appendChild(divProducto)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  