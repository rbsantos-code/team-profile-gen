const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create new employee object', () => {
    const employee = new Employee('Rich');
});

test('get employee ID info', () => {
    const randomID = 1234;
    const employee = new Employee('Rich', randomID);

    expect(employee.id).toBe(randomID);
});

test('get employee email info', () => {
    const randomEmail = 'random@yahoo.com';
    const employee = new Employee('Rich', 1234, randomEmail);

    expect(employee.email).toBe(randomEmail);
})

test('get job role info', () => {
    const role = 'employee';
    const employee = new Employee('Rich', 1234, role);

    expect(employee.role).toBe(role);
})