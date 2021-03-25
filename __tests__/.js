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

  describe('', function(){
    before(function() {
      page.goto('recipe-bork.surge.sh');
    });
    after(function() {
      page.close();
    });

    it('', async function() {
      ();
      
      
    });

    
  });
});