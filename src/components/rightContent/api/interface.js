const puppeteer = require('puppeteer');

const interfaz = {
  browser: null,
  page: null,

  async init() {
    try {
      this.browser = await puppeteer.launch();
      this.page = await this.browser.newPage();
    } catch (err) {
      console.log(err);
    }
  },

  async visitPage(url) {
    await this.page.goto(url);
  },

  async close() {
    await this.browser.close();
  },

  async querySelectorAll(selector) {
    try {
      return await this.page.evaluate(() => document.querySelectorAll(selector));
    } catch (error) {
      console.log(error);
    }
    return null;
  },
};

module.exports = interfaz;
