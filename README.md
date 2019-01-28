# own-gcp-scraper
<h1>Setup Google Compute Engine virtual machine ready for Puppeteer.</h1>

1. Create a new virtual machine instance in Google https://console.cloud.google.com/compute/instances
2. Open the SSH connection to the virtual machine
3. Create "install.sh" file and copy the content of "install.sh" in this repo file into it 
4. Run the shell command by typing "sh install.sh"
5. All needed dependencies will be installed

6. Create a new file "puppeteer-test.js"
7. Isert the content from this repo "puppeteer-test.js"
8. Save file and close
9. Run the puppeteer script by typing "node puppeteer-test.js"
10. you should see following logs:

Browser created <br>
Page opened<br>
Browser closed<br>
  
11. The Puppeteer configuration is now working in Google Compute Engine Virtual Machine
12. Be creative
