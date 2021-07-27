const Empleado = require('../models/prueba.model')

const PruebaCtrl={}

//req->request, res->response
PruebaCtrl.obtener=(req,res) => {
    res.send('funcionando desde get')
}

PruebaCtrl.crear=async(req,res) => {
    //console.log(req.body)
    const {nombre, apellido, salario}=req.body
    const NuevoRegistro = new Empleado({
        nombre, apellido, salario
    })

    await NuevoRegistro.save()
    res.json({mensaje:'Empleado guardado'})
}

PruebaCtrl.actualizar=(req,res) => {
    res.send('funcionando desde put')
}

PruebaCtrl.eliminar=(req,res) => {
    res.send('funcionando desde delete')
}

module.exports=PruebaCtrl