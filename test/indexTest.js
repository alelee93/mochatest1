//const assert = require("chai").assert;
// const sayHello = require("../app").sayHello;
//const { expect } = require("chai");

describe("index.js", () => {
  it("sayHello() regresa 'hello'", () => {
    expect(sayHello()).to.deep.eq("hello");
  });

  it("sayHello() regresa un string", () => {
    expect(sayHello()).to.be.a("string");
  });

  it("suma() regresa la suma de 2 numeros dados", () => {
    expect(suma(2, 3)).to.deep.eq(5);
  });
});
