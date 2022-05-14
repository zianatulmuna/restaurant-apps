const assert = require('assert');
const { waitForDebugger } = require('inspector');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// Scenario('showing empty liked restaurants', ({ I }) => {
//   I.seeElement('#query');
//   I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
// });

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
  
    I.amOnPage('/');
  
  
    I.seeElement('.resto-item__name a');
    
    const firstResto = locate('.resto-item__name a').first();
    const firstRestoName  = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestoName = await I.grabTextFrom('.resto-item__name');

    assert.strictEqual(firstRestoName, likedRestoName);
  });