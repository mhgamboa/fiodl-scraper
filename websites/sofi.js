const puppeteer = require("puppeteer");
const parse = require("./_parse");

module.exports = async () => {
  console.log("Sofi");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.discover.com/online-banking/savings-account/");

  let rate = await page.evaluate(() => document.getElementById("1").textContent);
  rate = parse(rate);
  console.log(rate);
  await browser.close();

  return rate;
};
