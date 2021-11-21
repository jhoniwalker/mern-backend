const Empleado = require('../models/empleado.model')

const EmpleadoCtrl={}

//req->request, res->response
EmpleadoCtrl.listar=async(req,res) => {
    const empleados = await Empleado.find()
    res.json(empleados)
}

EmpleadoCtrl.obtener=async(req, res) => {
    const empleado = await Empleado.findById(req.params.id)
    res.json(empleado)
}

EmpleadoCtrl.crear=async(req,res) => {
    const {nombre, apellido, salario}=req.body
    const NuevoEmpleado = new Empleado({
        nombre, apellido, salario
    })

    await NuevoEmpleado.save()
    res.json({mensaje:'Empleado guardado'})
}

EmpleadoCtrl.actualizar=async(req,res) => {
    const {nombre, apellido, salario}=req.body
    const NuevoRegistro = { nombre, apellido, salario }
    await Empleado.findByIdAndUpdate(req.params.id, NuevoRegistro)

    res.json({mensaje:'Empleado actualizado'})
}

EmpleadoCtrl.eliminar=async(req,res) => {
    await Empleado.findByIdAndRemove(req.params.id)

    res.json({mensaje:'Empleado Eliminado'})
}

module.exports=EmpleadoCtrl