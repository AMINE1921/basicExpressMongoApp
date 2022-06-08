import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  id: Number,
  type: String,
  datas: Array,
});

module.exports = mongoose.model("Sensor", sensorSchema);
