# own-gcp-scraper
<h1>Setup Google Compute Engine virtual machine ready for Puppeteer.</h1>

1. Create a new virtual machine instance in Google https://console.cloud.google.com/compute/instances
2. Open the SSH connection to the virtual machine
3. Create <code>install.sh</code> file and copy the content of "install.sh" in this repo file into it 
4. Run the shell command by typing <code>sh install.sh</code>
5. All needed dependencies will be installed

6. Create a new file <code>puppeteer-test.js</code>
7. Insert the content from this repo "puppeteer-test.js"
8. Save file and close
9. Run the puppeteer script by typing <code>node puppeteer-test.js</code>
10. you should see following logs:<br><br>

<code>Browser created</code><br><br>
<code>Page opened</code><br><br>
<code>Browser closed</code><br><br>

11. The Puppeteer configuration is now working in Google Compute Engine Virtual Machine
12. Be creative

<h3>Great examples and tutorials:</h3>

Simple scraping example: https://dev.to/napolux/how-to-scrap-that-web-page-with-nodejs-and-puppeteer-811<br>
Puppeteer documentation: https://github.com/GoogleChrome/puppeteer



<h2>Create MySQL database and connect it with Google Virtual Machine</h2>

1. Find your Virtual Macine External IP address from the <a href="https://console.cloud.google.com/compute/instances">VM instances main page</a> and remember it
2. Create a MySQL instance in <a href="https://console.cloud.google.com/sql/instances">Gooogle Cloud Platform SQL section</a> with the following settings
- Set a root password and store it for later usage
- Configuration options -> Choose database version -> 5.7
- Configuration options -> Set connectivity -> Add network -> insert your VM External IP address here
3. Wait for the MySQL database to be ready
4. Go to your MySQL instance page and find the MySQL instance Public IP Address from the "Connect to this instance" card on the front page

5. Open your virtual macine SSH connection
6. Type <code>mysql --host=[INSERT THE MYSQL IP HERE] --user=root --password</code>
7. Insert your MySQL root password
8. You should be logged in and see <code>MySQL [(none)]></code> 
9. You have succesfully created a database and connected to it from Google Virtual Machine
