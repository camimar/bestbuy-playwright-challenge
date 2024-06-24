import { Page, Locator, expect } from "@playwright/test";

export default class monitorsCategoryPage {

    private page: Page;

    private categoryPath: string = 'en-ca/collection/curved-monitors/12070';
    private productPath: string = 'en-ca/product/lg-34-1440p-wqhd-100hz-5ms-gtg-curved-va-lcd-monitor-34wr53qb-b-only-at-best-buy/17541158?source=collection&adSlot=1&slotPos=1';
    private lgMonitorLink: Locator;
    private sponsoredTag: Locator; 
    private lgMonitorProduct: Locator;

  
  
    constructor(page: Page) {

      this.page = page;

      this.lgMonitorLink = page.getByRole('link', { name: 'LG 34" 1440p WQHD 100Hz 5ms' });
      this.lgMonitorProduct = page.locator('xpath=ancestor::div[contains(@class, "listItem_10CIq materialOverride_vWsDY")]').locator('text="Sponsored"');
      this.sponsoredTag = page.getByText('Sponsored');
  
    }
  
    public async validateCategoryURL() {
      await expect(this.page).toHaveURL(`${this.categoryPath}`);
    }

    public async isLGMonitorVisible() {
      await expect(this.lgMonitorLink).toBeVisible();
    }

    get product() {
        return this.lgMonitorProduct;
    }

     get getSponsoredTag() {
      return this.product.locator(this.sponsoredTag);
    }

    async isSponsoredTagVisible() {
      await expect(this.sponsoredTag).toBeVisible();
    }
 

    public async clickOnLGMonitor() {
      await (this.lgMonitorLink).click();
    }

    public async validateProductURL() {
      await expect(this.page).toHaveURL(`${this.productPath}`);
    }

    
}