// Requirements
var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  modelUtils = require("./src/model-utils");
  generator = require("./src/layout-generator/layout-generator");

// Models
var componentsModel = require("./src/components-model/model");
var characteristicsModel = require("./src/characteristics-model/model");
var layoutsModel = require("./src/layouts-model/model");

// Mongo Collections
var layout = require("./mongo-models/layout");
var traininglabel = require("./mongo-models/trainingLabel");
var trainingdata = require("./mongo-models/trainingData");

// Configurations
const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Mongo Connection
mongoose.connect(
  "mongodb+srv://teamalpha:infa123@cluster0.j2df9.mongodb.net/AIDesigner?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

var PORT = process.env.PORT || 5000;
var componentsNNModel;

// End Points
app.get("/api/layout", async (req, res) => {
  layout.find({}, (err, layouts) => {
    res.send({ layouts: layouts });
  });
});

app.get("/api/layout/:id", async (req, res) => {
  layout.findOne({ id: req.params.id }, (err, layout) => {
    res.send({ layout: layout });
  });
});

// to be removed
app.post("/api/layout/generate", async (req, res) => {
  const layout = generator.generateLayout();
  res.send({ layout: layout });
});

app.post("/api/model/components/predict", async (req, res) => {
  var body = req.body;
  try {
    if (!componentsNNModel) {
      componentsNNModel = await componentsModel.loadModel(body.orgId);
    }
    const trainingLabels = await traininglabel.findOne({ modelType: "components"});
    const inputData = modelUtils.getInputTensor(trainingLabels.xLabels, body.selectedFields);
    const predictedComponents = await componentsNNModel.predict(inputData);
    const outputData = modelUtils.getOutputLabels(trainingLabels.yLabels, predictedComponents.dataSync());
    res.send({ components: outputData });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/model/components/train", async (req, res) => {
  var body = req.body;
  try {
    if (!componentsNNModel) {
      componentsNNModel = await componentsModel.loadModel(body.orgId);
    }
    const trainConfig = {epochs: 500, batchSize: 32};
    await componentsNNModel.train(trainConfig);
    await componentsModel.saveModel(body.orgId, componentsNNModel.getModelArtifacts());
    console.log("success");
    res.send({ status: "success" });
  } catch(err) {
    console.log(err);
    res.send({ status: "error" });
  }
});

// Server
app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
