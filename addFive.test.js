const addFive = require('./addFive');

test('returns the number plus five', function() {
    expect(addFive(1)).toBe(6);
});