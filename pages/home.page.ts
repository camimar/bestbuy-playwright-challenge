import { Page, Locator, expect } from "@playwright/test";

export default class homePage {

    private page: Page;
    private shopButton: Locator;
    private computersCategoryLink: Locator;
    private shopByCategoryTitle: Locator;
    private monitorsCategoryLink: Locator;
    private curvedMonitorsLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.shopButton = page.getByRole('button', { name: 'Shop' });
        this.shopByCategoryTitle = page.getByRole('heading', { name: 'Shop by Category' });
        this.computersCategoryLink = page.getByRole('link', { name: 'Computers, Tablets, &' });
        this.monitorsCategoryLink = page.getByRole('link', {name: 'Monitors'});
        this.curvedMonitorsLink = page.getByRole('link', {name : 'Curved Monitors'});  
    }

    public async isShopButtonVisibleandEnabled() {
        await expect(this.shopButton).toBeVisible();
        await expect(this.shopButton).toBeEnabled();
    }
  
    public async clickOnShopButton() {
        await this.shopButton.click(); 
    }

    public async isShopByCategoryTitleVisible() {
        await expect(this.shopByCategoryTitle).toBeVisible();
    }

    public async isComputerCategoryLinkVisible() {
        await expect(this.computersCategoryLink).toBeVisible();
    }

    public async clickOnComputersCategoryLink() {
        await this.computersCategoryLink.click(); 
    }

    public async isMonitorsLinkVisible() {
        await expect(this.monitorsCategoryLink).toBeVisible();
    }

    public async clickOnMonitorsLink() {
        await this.monitorsCategoryLink.click();
    }

    public async isCurvedMonitorsLinkVisible() {
        await expect(this.curvedMonitorsLink).toBeVisible();
    }

    public async clickOnCurvedMonitorsLink() {
        await this.curvedMonitorsLink.click(); 
    }


}