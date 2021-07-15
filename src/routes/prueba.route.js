const {Router}=require('express')
const route=Router()
const PruebaCtrl = require('../controllers/prueba.controller')

route.get('/', PruebaCtrl.obtener)

route.post('/', PruebaCtrl.crear)

route.put('/', PruebaCtrl.actualizar)

route.delete('/', PruebaCtrl.eliminar)

module.exports=route