var tf = require("@tensorflow/tfjs");

function getTestTrainingParams(trainingData, trainingLabels, splitRatio = 0.75) {
    const xData = [], yData = [];
    const xLabels = trainingLabels.xLabels;
    const yLabels = trainingLabels.yLabels;
    trainingData.forEach((trainingDataMember) => {
        let xTrainData = [...new Array(xLabels.length)].fill(0,0,xLabels.length);
        let yTrainData = [...new Array(yLabels.length)].fill(0,0,yLabels.length);
        trainingDataMember.xData.forEach((xDataValue) => {
            const index = xLabels.indexOf(xDataValue);
            if(index!==-1) {
                xTrainData[index] = 1;
            }
        });
        trainingDataMember.yData.forEach((yDataValue) => {
            const index = yLabels.indexOf(yDataValue);
            if(index!==-1) {
                yTrainData[index] = 1;
            }
        });
        xData.push(xTrainData);
        yData.push(yTrainData);
    });
    const splitIndex = Math.floor(trainingData.length*splitRatio);
    const xTrain = xData.slice(0, splitIndex);
    const xTest = xData.slice(splitIndex, xData.length);
    const yTrain = yData.slice(0, splitIndex);
    const yTest = yData.slice(splitIndex, yData.length);
    return { xTrain: tf.tensor(xTrain), yTrain: tf.tensor(yTrain), xTest: tf.tensor(xTest), yTest: tf.tensor(yTest) };
}

function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}

function toBuffer(ab) {
    var buf = Buffer.alloc(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}
function getInputTensor(xLabels, xPred) {
    const xData = [...new Array(0)];
    let xPredData = [...new Array(xLabels.length)].fill(0,0,xLabels.length);
    xPred.forEach((xPredLabel) => {
        const index = xLabels.indexOf(xPredLabel);
        if(index!==-1) {
            xPredData[index] = 1;
        }
    });
    xData.push(xPredData);
    return tf.tensor(xData);
}

function getOutputLabels(ylabels, yPred, threshold = 0.5) {
    ypredLabels = [];
    yPred.forEach((yPredValue, index) => {
        if(yPredValue > threshold) {
            ypredLabels.push(ylabels[index]);
        }
    });
    return ypredLabels;
}

module.exports = {
    getTestTrainingParams: getTestTrainingParams,
    toArrayBuffer: toArrayBuffer,
    toBuffer: toBuffer,
    getInputTensor: getInputTensor,
    getOutputLabels: getOutputLabels
}