const assert = require('assert');
const { waitForDebugger } = require('inspector');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

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

  Scenario('unliking one restaurant', async ({ I }) => {

    I.amOnPage('/');  
  
    I.seeElement('.resto-item__name a');
    
    const firstResto = locate('.resto-item__name a').first();
    const firstRestoName  = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');

    const unlikedRestoName = await I.grabTextFrom('.resto-item__name a');
    assert.strictEqual(firstRestoName, unlikedRestoName);
    I.click('.resto-item__name a');

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement('.resto-item');
  });