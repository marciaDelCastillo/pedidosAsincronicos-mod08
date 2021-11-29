const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
router.get('/', indexController.list);
router.get('/detail/:id', indexController.detail);
router.get('/create', indexController.detail);
router.post('/create', indexController.create);
router.put('/update/:id', indexController.update);
router.delete('/delete/:id', indexController.destroy);
/* 
//Rutas
//Listado de películas

//Detalle de una película
router.get('/:id', moviesAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/recomended/:rating', moviesAPIController.recomended);
//Agregar una película
router.post('/create', moviesAPIController.create);
//Modificar una película
router.put('/update/:id', moviesAPIController.update);
//Eliminar una película
router.delete('/delete/:id', moviesAPIController.destroy);
 */
module.exports = router;