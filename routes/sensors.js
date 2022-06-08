const express = require("express");
const router = express.Router();
const sensorsCtrl = require("../controllers/sensors");
const mongoSensorsCtrl = require("../controllers/mongoSensors");

//                Local datas               //
router.get("/getAllSensors", sensorsCtrl.getAllSensors);
router.get("/getSensors", sensorsCtrl.getSensors);
router.post("/addSensor", sensorsCtrl.addSensor);
router.delete("/deleteSensor/:id", sensorsCtrl.deleteSensor);
router.put("/editSensor/:id", sensorsCtrl.editSensor);

//                MongoDB datas               //
router.post("/newSensor", mongoSensorsCtrl.newSensor);
router.get("/getListSensors", mongoSensorsCtrl.getListSensors);
router.get("/getSensor/:id", mongoSensorsCtrl.getSensor);
router.delete("/removeSensor/:id", mongoSensorsCtrl.removeSensor);

module.exports = router;
