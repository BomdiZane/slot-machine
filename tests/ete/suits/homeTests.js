const { By, until } = require('selenium-webdriver');
const assert = require('chai').assert;

const homeTests = async function(driver, WAIT_DURATION = 60000) {
  if (!driver) throw('No driver provided!');

  try {
    await driver.get(process.env.APP_URL);
    await driver.wait(until.titleIs('Reel - Home'), WAIT_DURATION);
    await driver.wait(until.elementsLocated(By.css('header')), WAIT_DURATION);

    let [headers, footers] = await Promise.all([driver.findElements(By.css('header')), driver.findElements(By.css('footer'))]).then(results => results);

    assert.isAtLeast(headers.length, 1, `There must be at least 1 <header> per page: ${ headers.length } found!`);
    assert.equal(footers.length, 1, `There has to be 1 <footer> per page: ${ footers.length } found!`);

    // @TODO: more tests cases!

    console.log('All good in homeTests!\n');
  }
  catch(e) { throw(e); }
};

module.exports = { homeTests };
