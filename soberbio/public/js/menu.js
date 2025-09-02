const platosBase = [
  {
    nombre: 'Hamburguesa Gourmet',
    descripcion: 'Jugosa carne de res, queso maduro, cebolla caramelizada y pan artesanal.',
    precio: '38.000',
    imagen: '../images/platos/hamburguesa.png'
  },
  {
    nombre: 'Salchipapa Especial',
    descripcion: 'Papas fritas artesanales con salchicha  y salsas de la casa.',
    precio: '28.000',
    imagen: '../images/platos/salchipapa.png'
  },
  {
    nombre: 'Carne Asada',
    descripcion: 'Corte de res a la parrilla acompañado de vegetales salteados.',
    precio: '45.000',
    imagen: '../images/platos/carneAsada.png'
  },
  {
    nombre: 'Pollo Asado',
    descripcion: 'Pechuga de pollo marinada y asada lentamente con hierbas frescas.',
    precio: '32.000',
    imagen: '../images/platos/pechugaAsada.png'
  },
  {
    nombre: 'Ceviche',
    descripcion: 'Pescado fresco marinado en jugo de limón con cebolla y cilantro.',
    precio: '45.000',
    imagen: '../images/platos/ceviche.png'
  },
  {
    nombre: 'Pasta Alfredo',
    descripcion: 'Pasta fresca con salsa Alfredo cremosa y queso parmesano.',
    precio: '38.000',
    imagen: '../images/platos/pasta.png'
  },
  {
    nombre: 'Pizza Gourmet',
    descripcion: 'Masa artesanal, salsa de tomate fresco y ingredientes seleccionados.',
    precio: '40.000',
    imagen: '../images/platos/pizza.png'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('menu-container');
  if (!contenedor) return;

  const platosExtra = JSON.parse(localStorage.getItem('platosExtra')) || [];
  const platos = [...platosBase, ...platosExtra];

  platos.forEach(plato => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="menu-img">
        <img src="${plato.imagen}" alt="${plato.nombre}">
      </div>
      <h2 class="titulo-card">${plato.nombre}</h2>
      <p class="subtitulo-card">${plato.descripcion}</p>
      <p><strong>$${plato.precio}</strong></p>
      <button>Añadir al carrito</button>
    `;
    contenedor.appendChild(card);
  });
});

