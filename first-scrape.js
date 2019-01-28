const puppeteer = require('puppeteer');
                puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }).then(async browser => {
                const page = await browser.newPage();
                console.log("Browser created");
                    
                        
                    await page.goto("https://oikio.fi", {waitUntil: 'networkidle0'});                 
                    console.log("Page opened");
                    
                    //Scrape the H1 from OIKIO site
                    const result = await page.evaluate(() => document.querySelector('.h-custom-headline').innerText);

                    await browser.close();
                    console.log("Browser closed");          
                    console.log(result);
                    process.exit();
        
}).catch(function(error) {
    console.error('No way Paco!');
    process.exit();
});
