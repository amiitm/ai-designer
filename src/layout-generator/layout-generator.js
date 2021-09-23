var selectedFields = require("./mocks/fields");

function generateLayout() {
    const finalFields = [];
    selectedFields.forEach((field) => {
        if(!field.allowMany){
            finalFields.push(field.accessPath)
        }
    })
    return finalFields;
}

module.exports = {
    generateLayout: generateLayout
}