const express = require('express');
const path = require('path');
const homeController = require('./controllers/homeController');
const menuController = require('./controllers/menuController');
const adminController = require('./controllers/adminController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', homeController);
app.get('/menu', menuController);
app.get('/admin', adminController);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});