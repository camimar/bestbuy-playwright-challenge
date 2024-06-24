import { Locator, Page, expect } from '@playwright/test';
import ProductDetailPage from "./product-detail-page";
import exp from 'constants';


class Cart {


    private page: Page;
    private basketPath : string = '/en-ca/basket';
    private productInsideCart : Locator;

    constructor(page: Page) {

        this.page = page;

        this.productInsideCart = page.locator('.productDetails_1muS1 a:text-is("LG 34\" 1440p WQHD 100Hz 5ms GTG Curved VA LCD Monitor (34WR53QB-B) - Only at Best Buy")');
    }

    public async clickOnCartIcon() {
        this.page.locator('.basketIcon_1lhg2').click()
    }

    public async validateCartURL() {
        await expect(this.page).toHaveURL(`${this.basketPath}`);
    }

    public async validateProductInsideCart() {
        await expect(this.productInsideCart).toBeVisible();
    }
}

export default Cart;