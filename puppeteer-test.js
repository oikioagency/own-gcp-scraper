const puppeteer = require('puppeteer');
puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }).then(async browser => {
	const page = await browser.newPage();
		console.log("Browser created");
	await page.goto("https://www.google.com", {waitUntil: 'networkidle0'});		      
		console.log("Page opened");		    
	await browser.close();
		console.log("Browser closed");	    
	process.exit();
	
}).catch(function(error) {
    console.error('No way Paco!');
    process.exit();
});
