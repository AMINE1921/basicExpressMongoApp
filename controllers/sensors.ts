let sensors = [
  { id: 1, type: "alpha", datas: [1, 2, 3] },
  { id: 2, type: "beta", datas: [1, 2, 3], metrics: false },
  { id: 3, type: "omega", datas: { a: 1, b: 2 } },
];

exports.getAllSensors = (req, res) => {
  if (sensors) {
    return res.status(200).json({
      response: sensors,
    });
  } else {
    return res.status(404).json({ error: "La liste est vide !" });
  }
};

exports.getSensors = (req, res) => {
  const id = req?.query?.id;
  const filteredResult = sensors.find((e) => e.id == id);
  if (filteredResult) {
    return res.status(200).json({
      response: filteredResult,
    });
  } else {
    return res.status(404).json({ error: "Le capteur n'existe pas !" });
  }
};

exports.addSensor = (req, res) => {
  if (req?.body?.id) {
    sensors.push({
      id: req?.body?.id,
      type: req?.body?.type,
      datas: req?.body?.datas,
    });
    return res.status(201).json({
      message: "Capteur crée avec succès !",
      response: sensors,
    });
  } else {
    return res.status(405).json({ error: "ID obligatoire !" });
  }
};

exports.deleteSensor = (req, res) => {
  const idSensor = req?.params?.id;
  if (sensors.find((e) => e.id == idSensor)) {
    sensors = sensors.filter((obj) => obj.id != idSensor);
    return res.status(201).json({
      message: "Capteur supprimé avec succès !",
      response: sensors,
    });
  } else {
    return res.status(405).json({ error: "Le capteur n'existe pas !" });
  }
};

exports.editSensor = (req, res) => {
  const idSensor = req?.params?.id;
  console.log("body: ", req?.body);
  if (sensors.find((e) => e.id == idSensor)) {
    sensors = sensors.map((sensor) =>
      Number(sensor?.id) === parseFloat(idSensor)
        ? { ...sensor, type: req?.body?.type, datas: req?.body?.datas }
        : sensor
    );
    console.log("sensors: ", sensors);
    return res.status(201).json({
      message: "Capteur modifié avec succès !",
      response: sensors,
    });
  } else {
    return res.status(405).json({ error: "Le capteur n'existe pas !" });
  }
};
