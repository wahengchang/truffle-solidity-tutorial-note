var ToDos = artifacts.require("./ToDos.sol");

module.exports = function(deployer) {
  deployer.deploy(ToDos);
};