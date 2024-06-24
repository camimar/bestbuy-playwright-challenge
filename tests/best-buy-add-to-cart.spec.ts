import { test, expect, Browser, chromium } from '@playwright/test';
import homePage from '../pages/home.page';
import monitorsCategoryPage from '../pages/specific-category';
import ProductDetailPage from '../pages/product-detail-page';
import Cart from '../pages/cart';


test.describe('Navigate and Select a Product Category', () => {

  let home: homePage; // Declarar la variable aquí para que sea accesible en todo el bloque describe
  let category: monitorsCategoryPage;
  let pdp: ProductDetailPage;
  let cart: Cart;

  test.beforeEach(async ({ page }) => {
    await page.goto(''); 
    home = new homePage(page); // Inicializar la instancia aquí
    category = new monitorsCategoryPage(page);
    pdp = new ProductDetailPage(page);
    cart = new Cart(page);

  });

  test('Navigate and Select a Category',  async ({ page }) => {

    await home.isShopButtonVisibleandEnabled();
    await home.clickOnShopButton(); // Usar la instancia `home` en lugar de la clase `homePage`
  
    await home.isShopByCategoryTitleVisible(); //quitarlo
    await home.isComputerCategoryLinkVisible();
    await home.clickOnComputersCategoryLink();

    await home.isMonitorsLinkVisible();
    await home.clickOnMonitorsLink();

    await home.isCurvedMonitorsLinkVisible();
    await home.clickOnCurvedMonitorsLink();

    await category.validateCategoryURL();
  });


  test('Choose a Product', async ({ page }) => {
    await page.goto('https://www.bestbuy.ca/en-ca/collection/curved-monitors/12070');

    await category.isLGMonitorVisible();
    await category.isSponsoredTagVisible();

    await category.clickOnLGMonitor();
    await category.validateProductURL();     
     
    await pdp.validateProductTitle();
    await pdp.validateModelNumber();
    await pdp.validateWebCode();
    await pdp.validateOverview();
    await pdp.validateAvailability();
    
  });

  test('Add the Product to the cart', async ({ page }) => {

    const browser: Browser = await chromium.launch({
      headless: false, // opcional, para ejecución con UI
      slowMo: 50, // Ajusta este valor según necesites
    });

    await page.goto('https://www.bestbuy.ca/en-ca/product/lg-34-1440p-wqhd-100hz-5ms-gtg-curved-va-lcd-monitor-34wr53qb-b-only-at-best-buy/17541158?source=collection&adSlot=1&slotPos=1');

    await pdp.clickOnAddToCart();
    await pdp.validateItemAddedMessage();
    
  });

  test('Proceed to Cart:', async ({ page }) => {

    const browser: Browser = await chromium.launch({
      headless: false, // opcional, para ejecución con UI
      slowMo: 50, // Ajusta este valor según necesites
    });
    
    await page.goto('https://www.bestbuy.ca/en-ca/product/lg-34-1440p-wqhd-100hz-5ms-gtg-curved-va-lcd-monitor-34wr53qb-b-only-at-best-buy/17541158?source=collection&adSlot=1&slotPos=1');

    await pdp.clickOnAddToCart();
    await pdp.validateItemAddedMessage();
    await cart.clickOnCartIcon();
    await cart.validateCartURL();
    await cart.validateProductInsideCart();
    
  });

  test('Update the Quantity in the Cart:', async ({ page }) => {
   // Once the product is in the cart, locate the quantity selector or input field for the product.
  // Update the quantity to a new value (e.g., 2). This might involve selecting a value from a dropdown or entering a number in an input field.
    // Confirm that the cart updates to reflect the new quantity, which may include waiting for the page to refresh or for an update
  });


  test('Remove the product from the cart', async ({ page }) => {
    //de los pasos del test anterior, crear una funcion eu los agrupe 
    //y luego llamarla aquí para comenzar
    //con el producto ya agregado al carrito

    // Find the option to remove the item from the cart. This could be a button or link labeled "Remove" or a trash can icon associated with the product in the cart.
    //Click the remove option and confirm that the item is successfully removed from the cart. This might require handling a confirmation dialog or waiting for the page to update to show an empty cart or a "Your cart is empty" message
  });;


});




