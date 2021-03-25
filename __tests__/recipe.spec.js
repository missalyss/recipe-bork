// NPM INSTALL PUPPETEER, MOCHA, & CHAI IN ORDER TO RUN THESE TESTS
const { expect } = require('chai'); 
const puppeteer = require('puppeteer'); 

describe('Your generated test: ', function() {
  let browser;
  let page;

  before(async function() {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
  });

  after(function() {
    browser.close();
  });

  describe('recipe renders correctly when items are missing', function(){
    before(function() {
      page.goto('recipe-bork.surge.sh');
    });
    after(function() {
      page.close();
    });

    it('', async function() {
      page.focus('h3, text-cream', );
      
      await page.waitForSelector('');
      const result = page.$eval('', undefined);
      expect(result).to.be.equal('');
    });

    
  });
});