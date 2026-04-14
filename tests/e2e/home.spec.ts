import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
  test("should load successfully", async ({ page }) => {
    await page.goto("http://localhost:3000/")
    await expect(page).toHaveTitle(/Portfolio/i)
  })

  test("should display header navigation", async ({ page }) => {
    await page.goto("http://localhost:3000/")
    const nav = page.locator("nav")
    await expect(nav).toBeVisible()
    await expect(nav).toContainText([ "Home", "Projects", "Contact" ])
  })

  test("should show hero section", async ({ page }) => {
    await page.goto("http://localhost:3000/")
    const hero = page.locator("section#hero")
    await expect(hero).toBeVisible()
    await expect(hero).toContainText(/Welcome/i)
  })

  test("should navigate to Projects page", async ({ page }) => {
    await page.goto("http://localhost:3000/")
    await page.click("text=Projects")
    await expect(page).toHaveURL(/\/projects/)
    await expect(page.locator("h1")).toContainText(/Projects/i)
  })

  test("should display footer", async ({ page }) => {
    await page.goto("http://localhost:3000/")
    const footer = page.locator("footer")
    await expect(footer).toBeVisible()
    await expect(footer).toContainText(/©/)
  })
})
