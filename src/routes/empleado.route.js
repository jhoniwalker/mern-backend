const {Router}=require('express')
const route=Router()
const EmpleadoCtrl = require('../controllers/empleado.controller')

route.get('/empleados', EmpleadoCtrl.listar)

route.get('/empleados/:id', EmpleadoCtrl.obtener)

route.post('/empleados', EmpleadoCtrl.crear)

route.put('/empleados/:id', EmpleadoCtrl.actualizar)

route.delete('/empleados/:id', EmpleadoCtrl.eliminar)

module.exports=route