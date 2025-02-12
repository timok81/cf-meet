import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:5173/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .show-details");

    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .show-details");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});

describe("Filter Events By City", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:5173/");
    await page.waitForSelector("#event-list");
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn't searched for a city, show upcoming events from all cities", async () => {
    const renderedEvents = await page.$$(".event");
    expect(renderedEvents.length).toBe(32);
  });

  test("User should see a list of suggestions when they search for a city.", async () => {
    await page.type(".city", "Berlin");
    const suggestionsList = await page.$(".suggestions");
    expect(suggestionsList).toBeDefined();
  });

  test(" User can select a city from the suggested list.", async () => {
    await page.click(".suggestions .suggestion:first-child");
    const inputFieldValue = await page.$eval(".city", (el) => el.value);
    expect(inputFieldValue).toBe("Berlin, Germany");
  });
});
