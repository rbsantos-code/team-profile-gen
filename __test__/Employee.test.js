const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create new employee object', () => {
    const employee = new Employee('Rich');
});

test('get employee ID info', () => {
    const randomID = 1234;
    const employee = new Employee('Rich', randomID);

    expect(employee.id).toBe(randomID);
});