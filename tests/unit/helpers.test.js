const { getRandomInt } = require('../../utils/helpers');

describe('helpers.js:', () => {

  let max = 20, min = 10, randInt = getRandomInt(max, min);

  describe('getRandomInt()', () => {
    it(`should return an integer between ${ min } and ${ max } (boundaries inclusive)`, () => {

      expect(randInt).toBeDefined();
      expect(randInt).toBeGreaterThanOrEqual(min);
      expect(randInt).toBeLessThanOrEqual(max);
    });
  });
});
