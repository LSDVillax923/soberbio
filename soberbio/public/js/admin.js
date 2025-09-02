
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('plato-form');
  const lista = document.getElementById('platos-list');
  if (!form || !lista) return;

  const renderPlatos = () => {
    const platos = JSON.parse(localStorage.getItem('platosExtra')) || [];
    lista.innerHTML = '';
    platos.forEach((plato, index) => {
      const li = document.createElement('li');
      li.textContent = plato.nombre;
      const btn = document.createElement('button');
      btn.textContent = 'Eliminar';
      btn.addEventListener('click', () => {
        platos.splice(index, 1);
        localStorage.setItem('platosExtra', JSON.stringify(platos));
        renderPlatos();
      });
      li.appendChild(btn);
      lista.appendChild(li);
    });
  };

  renderPlatos();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
const nuevoPlato = {
      nombre: form.nombre.value.trim(),
      descripcion: form.descripcion.value.trim(),
      precio: form.precio.value.trim(),
      imagen: form.imagen.value.trim()
    };
    const platosGuardados = JSON.parse(localStorage.getItem('platosExtra')) || [];
    platosGuardados.push(nuevoPlato);
    localStorage.setItem('platosExtra', JSON.stringify(platosGuardados));
      form.reset();
    renderPlatos();
    });
    });