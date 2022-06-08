const Sensor = require("../models/Sensor");

exports.newSensor = async (req, res) => {
  if (req?.body?.id) {
    const sensor = new Sensor({
      id: parseFloat(req?.body?.id),
      type: req?.body?.type,
      datas: req?.body?.datas,
    });
    await sensor
      .save()
      .then(() => {
        return res.status(201).json({
          message: "Capteur créé avec succès !",
          response: sensor,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ error: err });
      });
  } else {
    return res.status(405).json({ error: "ID obligatoire !" });
  }
};

exports.getListSensors = async (req, res) => {
  await Sensor.find()
    .then((sensors) => {
      return res.status(200).json({
        response: sensors,
      });
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
};

exports.getSensor = async (req, res) => {
  const idSensor = req?.params?.id;
  await Sensor.findOne({ id: idSensor })
    .then((sensor) => {
      return res.status(200).json({
        response: sensor,
      });
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
};

exports.removeSensor = async (req, res) => {
  const idSensor = req?.params?.id;
  const sensorExists = await Sensor.exists({ id: idSensor });

  if (sensorExists) {
    await Sensor.findOneAndDelete({ id: idSensor })
      .then(() => {
        return res.status(201).json({
          message: "Capteur supprimé avec succès !",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(405).json({ error: err });
      });
  } else {
    return res.status(405).json({ error: "Le capteur n'existe pas !" });
  }
};
