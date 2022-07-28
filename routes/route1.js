const router = require("express").Router();
const brain = require("brain.js");
const fs = require("fs");

router.get("/iecho", async (req, res) => {
    const net = new brain.recurrent.LSTM();
    const netState = JSON.parse(fs.readFileSync("./brain/model.json", "utf-8"));
    net.fromJSON(netState);
    try {
        const text = (req.query.text).toLowerCase();
        if (text === "") return res.status(400).send({ error: "text is required" })
        const invertedText = await text.split("").reverse().join("");
        const palindrome = net.run(text);
        const response = {
            text: text,
            palindrome: palindrome,
            reversed: invertedText
        }
        return res.send(response);
    } catch (err) {
        return res.send(err);
    }
});

module.exports = router;