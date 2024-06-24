import { Locator, Page, expect } from '@playwright/test';

class ProductDetailPage {
  

  private page: Page;

  private modelNumberTag: Locator;
  private webCodeTag: Locator;
  private addToCartButton:  Locator;

    constructor(page: Page) {

        this.page = page;

        this.modelNumberTag = page.getByText('Model Number:');
        this.webCodeTag = page.getByText('Web Code:');
        this.addToCartButton = page.getByTestId('delivery').getByRole('button', { name: 'Add to Cart' });

    }

    productDetailsObject = {
        title: 'LG 34" 1440p WQHD 100Hz 5ms',
        modelNumber: '34WR53QB-B',
        webCode: '17541158',
        overviewSnippet: 'Redefine your visual',
        availabilityText: 'Available to ship',
    };

  async validateProductTitle() {
    await expect(this.page.getByRole('heading', { name: this.productDetailsObject.title })).toBeVisible();
  }

  async validateModelNumber() {
    await expect(this.modelNumberTag).toBeVisible();
    await expect(this.page.getByText(this.productDetailsObject.modelNumber)).toBeVisible();
  }

  async validateWebCode() {
    await expect(this.webCodeTag).toBeVisible();
    await expect(this.page.getByText(this.productDetailsObject.webCode)).toBeVisible();
  }

  async validateOverview() {
    await expect(this.page.getByText(this.productDetailsObject.overviewSnippet)).toBeVisible();
  }

  async validateAvailability() {
    await expect(this.page.getByText(this.productDetailsObject.availabilityText)).toBeVisible();
  }

  async clickOnAddToCart() {
    await this.addToCartButton.click();
  }

  async validateItemAddedMessage(){
   // await expect(this.page.getByText('This item has been added to your cart.', { exact: true })).toBeVisible();
    await expect(this.page.locator('text=This item has been added to your cart.')).toBeVisible();
    //await expect(this.page.locator('.item-added-message_1Gq2C')).toContainText('This item has been added to your cart.');
  }

}


export default ProductDetailPage;