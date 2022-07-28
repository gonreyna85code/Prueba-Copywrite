const brain = require("brain.js");
const fs = require("fs");

async function trainer(){
    const net = new brain.recurrent.LSTM();
        console.log("Training new model...");
        const data = JSON.parse(fs.readFileSync("./brain/data.json", "utf-8"));
        net.train(data, {
            log: (error) => console.log(error),
            iterations: 100,
        });
        const model = net.toJSON();
        fs.writeFileSync("./brain/model.json", JSON.stringify(model));        
        console.log("Model trained!");
}

module.exports = {trainer};