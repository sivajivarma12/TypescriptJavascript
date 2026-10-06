import { test, expect } from '@playwright/test';

test('Assignment1', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  const imageLogo = page.locator('//img[contains(@src,"images/logo.gif")]');
  const imageLogoTitle = await imageLogo.getAttribute('title');
  expect(imageLogoTitle).toBe('ParaBank');

  const tagline = page.locator('//img[contains(@src,"images/logo.gif")]/following::p[@class="caption"]');
  const title = await tagline.textContent();
  expect(title).toBe('Experience the difference');

    const inputUsername = await page.locator('//input[@name="username"]');
    await inputUsername.fill("sivaji");

    const loginButton = await page.locator('//input[@value="Log In"]');
    await loginButton.click();

    const errorVal = await page.locator('//div[@id="rightPanel"]/h1');
    expect(await errorVal.textContent()).toBe('Error!');


    const errorMessage = await page.locator('//div[@id="rightPanel"]/h1/following::p[@class="error"]');
    expect(await errorMessage.textContent()).toBe('Please enter a username and password.');

    const AdminPage = await page.locator('//a[text()="Admin Page"]');
    await AdminPage.click();

    const jdbc = await page.locator('//input[@value="jdbc"]');
    expect(await jdbc.isEnabled()).toBe(true);

    const soap = await page.locator('//input[@value="soap"]');
    await soap.click();
    expect(await soap.isEnabled()).toBe(true);

    await page.locator('//b[text()="Loan Provider:"]').scrollIntoViewIfNeeded();
    const gotodropdown = await page.locator('//select[@id="loanProvider"]');
    await gotodropdown.selectOption({value:'ws'});

    await page.locator('//input[@value="Submit"]').click();

    await page.locator('//h1[contains(text(),"Administration")]').scrollIntoViewIfNeeded();
    
    expect(await page.locator('//div[@id="rightPanel"]/p/b').textContent()).toContain('Settings saved successfully');
    const ServicePage = await page.locator('//ul[@class="leftmenu"]//a[text()="Services"]');
    await ServicePage.click();

    await page.locator('//span[text()="Bookstore services:"]').scrollIntoViewIfNeeded();

    //table
    const rows = await page.locator('//div[@id="rightPanel"]/table[2]//tr');
    const cloumns = await page.locator('//div[@id="rightPanel"]/table[2]//tr[1]/td');
    console.log(`Total rows in table ${await rows.count()}`);
    console.log(`Total column in table ${await cloumns.count()}`);

    for(var row:number=1; row<=await rows.count();row++)
    {
        var cloumValuesOfRow:string = "|";
        for(var cloumn:number=1; cloumn<=await cloumns.count();cloumn++)
        {
            const value = await page.locator('//div[@id="rightPanel"]/table[2]//tr['+row.toString()+']/td['+cloumn.toString()+']');
            cloumValuesOfRow = cloumValuesOfRow + ((await value.textContent()) ?? '').trim() + "|";
            
        }
        console.log(cloumValuesOfRow);
    }
});