import { Router } from "express";
const router = Router();

//Controladores
import { empleadoCtrl } from '../controllers/empleados.controller.js'
import { biometricoCtrl } from '../controllers/biometrico.controller.js'
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT");
    next();
  });
//Gets
router.get("/empleado/:id", empleadoCtrl.getempleado);
router.get("/getbiometrico/:id/:estado/:validacion", biometricoCtrl.getBiometrico);
//POST
router.post("/addbiometrico/:estado", biometricoCtrl.addBiometrico);
router.post("/uploadfile/", biometricoCtrl.uploadFile);
//PUT
router.put("/updatebiometrico/:id",biometricoCtrl.updateBiometrico)




export default router;