const DE = artifacts.require("DragonEye");
const fs = require('fs');
const link = fs.readFileSync(".link").toString().trim();

module.exports = function (deployer) {
  deployer.deploy(DE, link, "DragonEye", "DE");
};
