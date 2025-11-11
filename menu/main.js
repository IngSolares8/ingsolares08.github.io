/* ANIMACIÓN MENÚ */
let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
  listElement.addEventListener('click', () => {

    listElement.classList.toggle('arrow');

    listElement.classList.add("pulse-menu");
    setTimeout(() => listElement.classList.remove("pulse-menu"), 250);

    let menu = listElement.nextElementSibling;
    let altura = menu.clientHeight === 0 ? menu.scrollHeight : 0;
    menu.style.height = `${altura}px`;
  });
});

/* VARIABLES */
const contenido = document.getElementById("contenido");
const btnInicio = document.getElementById("btnInicio");
const btnPantalones = document.getElementById("btnPantalones");
const btnAbrigos = document.getElementById("btnAbrigos");
const btnCamisetas = document.getElementById("btnCamisetas");
const btnZapatos = document.getElementById("btnZapatos");
const btnGorras = document.getElementById("btnGorras");
const btnCarrito = document.getElementById("btnCarrito");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

/* CARRITO LOCAL STORAGE */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
function guardarCarrito(){ localStorage.setItem("carrito", JSON.stringify(carrito)); }

/* INICIO */
btnInicio.addEventListener("click", () => {
  contenido.innerHTML = `<h1 class="bienvenida">Bienvenido a la Tienda Online</h1>`;
});

/* FUNCIÓN GRID */
function mostrarProductos(titulo, productos) {
  contenido.innerHTML = `<h2>${titulo}</h2><div class="productos-grid"></div>`;
  let grid = document.querySelector(".productos-grid");

  productos.forEach((p, i) => {
    grid.innerHTML += `
      <div class="producto-card">
        <img src="${p.img}">
        <h3>${p.nombre}</h3>
        <p>Q${p.precio}</p>
        <button onclick="agregarCarrito(${i}, '${titulo}', event)">AGREGAR</button>
      </div>
    `;
  });
}

/* CATEGORÍAS */
btnPantalones.addEventListener("click", () => mostrarProductos("Pantalones", [
  {nombre:"Pantalón 01",precio:1000,img:"assets/p1.jpg"},
  {nombre:"Pantalón 02",precio:1000,img:"assets/p2.jpg"},
  {nombre:"Pantalón 03",precio:1000,img:"assets/p3.jpg"},
  {nombre:"Pantalón 04",precio:1000,img:"assets/p4.jpg"},
  {nombre:"Pantalón 05",precio:1200,img:"assets/p5.jpg"},
  {nombre:"Pantalón 06",precio:1250,img:"assets/p6.jpg"},
]));

btnAbrigos.addEventListener("click", () => mostrarProductos("Abrigos", [
  {nombre:"Abrigo 01",precio:900,img:"assets/a1.jpg"},
  {nombre:"Abrigo 02",precio:950,img:"assets/a2.jpg"},
  {nombre:"Abrigo 03",precio:990,img:"assets/a3.jpg"},
  {nombre:"Abrigo 04",precio:880,img:"assets/a4.jpg"},
  {nombre:"Abrigo 05",precio:1050,img:"assets/a5.jpg"},
  {nombre:"Abrigo 06",precio:1100,img:"assets/a6.jpg"},
]));

btnCamisetas.addEventListener("click", () => mostrarProductos("Camisetas", [
  {nombre:"Camiseta 01",precio:450,img:"assets/c1.jpg"},
  {nombre:"Camiseta 02",precio:450,img:"assets/c2.jpg"},
  {nombre:"Camiseta 03",precio:450,img:"assets/c3.jpg"},
  {nombre:"Camiseta 04",precio:450,img:"assets/c4.jpg"},
  {nombre:"Camiseta 05",precio:480,img:"assets/c5.jpg"},
  {nombre:"Camiseta 06",precio:500,img:"assets/c6.jpg"},
]));

btnZapatos.addEventListener("click", () => mostrarProductos("Zapatos", [
  {nombre:"Zapato 01",precio:600,img:"assets/z1.jpg"},
  {nombre:"Zapato 02",precio:650,img:"assets/z2.jpg"},
  {nombre:"Zapato 03",precio:700,img:"assets/z3.jpg"},
  {nombre:"Zapato 04",precio:750,img:"assets/z4.jpg"},
  {nombre:"Zapato 05",precio:820,img:"assets/z5.jpg"},
  {nombre:"Zapato 06",precio:900,img:"assets/z6.jpg"},
]));

btnGorras.addEventListener("click", () => mostrarProductos("Gorras", [
  {nombre:"Gorra 01",precio:200,img:"assets/g1.jpg"},
  {nombre:"Gorra 02",precio:220,img:"assets/g2.jpg"},
  {nombre:"Gorra 03",precio:250,img:"assets/g3.jpg"},
  {nombre:"Gorra 04",precio:270,img:"assets/g4.jpg"},
  {nombre:"Gorra 05",precio:290,img:"assets/g5.jpg"},
  {nombre:"Gorra 06",precio:330,img:"assets/g6.jpg"},
]));

/* AGREGAR CARRITO */
function agregarCarrito(index, categoria, event){

  const lista = {
    "Pantalones": [
      {nombre:"Pantalón 01",precio:1000,img:"assets/p1.jpg"},
      {nombre:"Pantalón 02",precio:1000,img:"assets/p2.jpg"},
      {nombre:"Pantalón 03",precio:1000,img:"assets/p3.jpg"},
      {nombre:"Pantalón 04",precio:1000,img:"assets/p4.jpg"},
      {nombre:"Pantalón 05",precio:1200,img:"assets/p5.jpg"},
      {nombre:"Pantalón 06",precio:1250,img:"assets/p6.jpg"},
    ],
    "Abrigos": [
      {nombre:"Abrigo 01",precio:900,img:"assets/a1.jpg"},
      {nombre:"Abrigo 02",precio:950,img:"assets/a2.jpg"},
      {nombre:"Abrigo 03",precio:990,img:"assets/a3.jpg"},
      {nombre:"Abrigo 04",precio:880,img:"assets/a4.jpg"},
      {nombre:"Abrigo 05",precio:1050,img:"assets/a5.jpg"},
      {nombre:"Abrigo 06",precio:1100,img:"assets/a6.jpg"},
    ],
    "Camisetas": [
      {nombre:"Camiseta 01",precio:450,img:"assets/c1.jpg"},
      {nombre:"Camiseta 02",precio:450,img:"assets/c2.jpg"},
      {nombre:"Camiseta 03",precio:450,img:"assets/c3.jpg"},
      {nombre:"Camiseta 04",precio:450,img:"assets/c4.jpg"},
      {nombre:"Camiseta 05",precio:480,img:"assets/c5.jpg"},
      {nombre:"Camiseta 06",precio:500,img:"assets/c6.jpg"},
    ],
    "Zapatos": [
      {nombre:"Zapato 01",precio:600,img:"assets/z1.jpg"},
      {nombre:"Zapato 02",precio:650,img:"assets/z2.jpg"},
      {nombre:"Zapato 03",precio:700,img:"assets/z3.jpg"},
      {nombre:"Zapato 04",precio:750,img:"assets/z4.jpg"},
      {nombre:"Zapato 05",precio:820,img:"assets/z5.jpg"},
      {nombre:"Zapato 06",precio:900,img:"assets/z6.jpg"},
    ],
    "Gorras": [
      {nombre:"Gorra 01",precio:200,img:"assets/g1.jpg"},
      {nombre:"Gorra 02",precio:220,img:"assets/g2.jpg"},
      {nombre:"Gorra 03",precio:250,img:"assets/g3.jpg"},
      {nombre:"Gorra 04",precio:270,img:"assets/g4.jpg"},
      {nombre:"Gorra 05",precio:290,img:"assets/g5.jpg"},
      {nombre:"Gorra 06",precio:330,img:"assets/g6.jpg"},
    ]
  };

  let producto = lista[categoria][index];
  let existe = carrito.find(p => p.nombre === producto.nombre);

  if(existe) existe.cantidad++;
  else carrito.push({...producto, cantidad:1});

  guardarCarrito();

  mostrarToast("¡Producto agregado con éxito! ✅");

  event.target.classList.add("btn-agregado");
  setTimeout(() => event.target.classList.remove("btn-agregado"), 300);
}

/* TOAST BONITO */
function mostrarToast(msg){
  let t = document.createElement("div");
  t.className = "toast-bonito";
  t.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add("toast-bonito-hide"), 1800);
  setTimeout(() => t.remove(), 2300);
}

/* CARRITO */
btnCarrito.addEventListener("click", () => {
  contenido.innerHTML = '<h2>Carrito de Compras</h2><div class="carrito-container"></div>';
  let cont = document.querySelector(".carrito-container");

  if(carrito.length === 0){
    cont.innerHTML = "<p>No hay productos en el carrito.</p>";
    return;
  }

  carrito.forEach((p, i) => {
    cont.innerHTML += `
      <div class="carrito-item">
        <img src="${p.img}">
        <div class="carrito-info">
          <h3>${p.nombre}</h3>
          <p>Precio: Q${p.precio}</p>
          <button class="cantidad-btn" onclick="disminuir(${i})">-</button>
          <span class="cantidad-numero">${p.cantidad}</span>
          <button class="cantidad-btn" onclick="aumentar(${i})">+</button>
          <p><b>Subtotal:</b> Q${p.precio * p.cantidad}</p>
        </div>
        <button class="btn-eliminar" onclick="eliminarItem(${i})">Eliminar</button>
      </div>`;
  });

  let total = carrito.reduce((a,b)=>a+(b.precio*b.cantidad),0);

  cont.innerHTML += `
    <div class="total-box">Total: Q${total}</div>
    <button class="btn-general btn-vaciar" onclick="vaciarCarrito()">Vaciar carrito</button>
    <button class="btn-general btn-comprar" onclick="comprar()">Comprar</button>
  `;
});

/* CANTIDAD CARRITO */
function aumentar(i) { carrito[i].cantidad++; guardarCarrito(); btnCarrito.click(); }
function disminuir(i) { if(carrito[i].cantidad>1) carrito[i].cantidad--; guardarCarrito(); btnCarrito.click(); }
function eliminarItem(i){ carrito.splice(i,1); guardarCarrito(); btnCarrito.click(); }
function vaciarCarrito(){ carrito=[]; guardarCarrito(); btnCarrito.click(); }

/* PAGO */
function comprar() {
  contenido.innerHTML = `
    <div class="pago-container">
      <h2>Pago</h2>
      <label>Número de tarjeta:</label>
      <input id="cardNumber" class="pago-input" placeholder="0000 0000 0000 0000">

      <div class="pago-row">
        <div>
          <label>Fecha vencimiento (MM/AA):</label>
          <input id="cardExpiry" class="pago-input" placeholder="MM AA">
        </div>
        <div>
          <label>CVV:</label>
          <input id="cardCvv" class="pago-input" placeholder="000">
        </div>
      </div>

      <label>Nombre en tarjeta:</label>
      <input id="cardName" class="pago-input">

      <label>Dirección:</label>
      <input id="billAddress" class="pago-input">

      <label>Ciudad:</label>
      <input id="billCity" class="pago-input">

      <label>Región:</label>
      <input id="billRegion" class="pago-input">

      <button class="pago-btn" onclick="validarPago()">Pagar ahora</button>
    </div>
  `;
}

/* VALIDAR */
function validarPago() {
  let card = document.getElementById("cardNumber").value.trim();
  let exp = document.getElementById("cardExpiry").value.trim();
  let cvv = document.getElementById("cardCvv").value.trim();
  let name = document.getElementById("cardName").value.trim();
  let dir = document.getElementById("billAddress").value.trim();
  let city = document.getElementById("billCity").value.trim();
  let region = document.getElementById("billRegion").value.trim();

  if(card.length < 12 || exp.length < 4 || cvv.length < 3 || name.length < 2 || dir.length < 2 || city.length < 2 || region.length < 2){
    mostrarToast("❌ Completa los campos correctamente");
    return;
  }

  carrito=[];
  guardarCarrito();
  mostrarModal();
}

/* MODAL */
function mostrarModal(){
  document.getElementById("modal").classList.remove("hidden");
}

function cerrarModal(){
  document.getElementById("modal").classList.add("hidden");
  btnInicio.click();
}

/* CERRAR SESIÓN */
btnCerrarSesion.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  carrito=[];
  alert("✅ Sesión cerrada correctamente");
  window.location.href = "../index.html";
});
