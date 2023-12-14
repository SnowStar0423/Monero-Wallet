const express = require('express');
const app = express();
const port = 3000;
const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`...`);
const { document } = window;
const { generateWallet } = require('./monero');
const monero = require('./monero');
const WebCrypto = require("@peculiar/webcrypto");

global.window = {
    crypto: new WebCrypto.Crypto()
};

app.get('/create', (req, res) => {
    const response = JSON.parse(generateWallet())
    const data = {
        privateKey: response.privateKey,
        publicKey: response.publicKey,
        seed: response.seed
    };

    // Send JSON response
    res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});