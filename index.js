// Importing required modules and functions from helpers.js
const { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction } = require('./helpers.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = chai;

// Enabling chai-spies
chai.use(spies);

describe('index', () => {
  describe('receivesAFunction(callback)', () => {
    it('receives a function and calls it', () => {
      // Creating a spy function
      const spy = chai.spy();

      // Calling the function with the spy as an argument
      receivesAFunction(spy);

      // Expecting the spy function to have been called
      expect(spy).to.have.been.called();
    });
  });

  describe('returnsANamedFunction()', () => {
    it('returns a function', () => {
      // Calling the function and storing the returned function
      const fn = returnsANamedFunction();

      // Expecting the returned value to be a function
      expect(fn).to.be.a('function');
    });

    it('returns a named function', () => {
      // Calling the function and storing the returned function
      const fn = returnsANamedFunction();

      // Expecting the returned function to have a name
      expect(fn.name).to.not.equal('');
    });
  });

  describe('returnsAnAnonymousFunction()', () => {
    it('returns a function', () => {
      // Calling the function and storing the returned function
      const fn = returnsAnAnonymousFunction();

      // Expecting the returned value to be a function
      expect(fn).to.be.a('function');
    });

    it('returns an anonymous function', () => {
      // Calling the function and storing the returned function
      const fn = returnsAnAnonymousFunction();

      // Expecting the returned function to have an empty name
      expect(fn.name).to.equal('');
    });
  });
});
