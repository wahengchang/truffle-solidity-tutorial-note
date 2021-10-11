const Todos = artifacts.require("Todos");

contract("Todos", async function(accounts) {
  it("[Happy Path] should be able to create new todo Item, and complete it.", async function() {
    const todos = await Todos.deployed();

    console.log('todos.address: ', todos.address)

    // -=-=-=-=-==-=- part 1
    const newValue = 'amazing-1'
    const resultOfCreate = await todos.create(newValue)
    console.log('resultOfCreate.tx: ', resultOfCreate.tx)
    console.log('resultOfCreate.receipt: ', resultOfCreate.receipt)
    const todoList = await todos.get(0)
    assert.equal(newValue, todoList.text);
    assert.equal(false, todoList.completed);

    // -=-=-=-=-==-=- part 2
    await todos.toggleCompleted(0)
    const todoList2 = await todos.get(0)
    assert.equal(newValue, todoList2.text);
    assert.equal(true, todoList2.completed);
  });
});
