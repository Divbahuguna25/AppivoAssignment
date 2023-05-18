import { test, expect } from "@playwright/test";

test.describe("Creating a testcase for searching iphone", () => {
  test("Searching for a midnight iphone 14 plus", async ({ page }) => {
    await page.goto("https://www.amazon.in/");

    // Search for "iphone 14"
    await page.fill("#twotabsearchtextbox", "iphone 14 plus");

    await page.getByRole("button", { name: "Go", exact: true }).click();

    // Click on the first search result
    await page.locator("//h2 //a //span").first().click();

    var productHeading = "Apple iPhone 14 Plus (128 GB) - Midnight";

    const [page1] = await Promise.all([page.waitForEvent("popup")]);

    //opening the iphone page in the new tab
    await page1
      .locator("//span[@id='color_name_1'] //span //input[@name='1']")
      .click();

    await expect(page1.locator("#productTitle")).toHaveText(productHeading);
  });
});
