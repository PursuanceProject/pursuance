# Pursuance UI Testing

This document describes how to setup your system to test the Pursuance
UI. It assumes you have a working Pursuance server and dev system
already running. If that does not describe your situation, stop here,
follow the steps in the [top-level README](README.md), and then come
back to this document to proceed.

## Getting Started on Linux

1. Download and extract the Firefox WebDriver client, which as at
version 0.20.1 at the time this was written:
```
curl -O https://github.com/mozilla/geckodriver/releases/download/v0.20.1/geckodriver-v0.20.1-linux64.tar.gz
tar zxvf geckodriver-v0.20.1-linux64.tar.gz
```
1. Download the standalone Selenium Server, which was current at version 
3.12.0 at the time this was written:
```
curl -O https://selenium-release.storage.googleapis.com/3.12/selenium-server-standalone-3.12.0.jar
```
1. Next, you will need 2 terminals. In the first terminal, start the 
Selenium server:
```
java -jar -Dwebdriver.gecko.driver=./geckodriver ./selenium-server-standalone-3.12.0.jar
```
1. In the second terminal, make sure the all the test bits are installed, 
then run the test suite:
```
npm install
npm run wdio wdio.conf.js
```
1. The output should resemble the following:
```
$ npm run wdio wdio.conf.js
> pursuance@0.1.0 wdio /home/kwall/gocode/src/github.com/PursuanceProject/pursuance
> node -r babel-register ./node_modules/.bin/wdio "wdio.conf.js"

------------------------------------------------------------------
[firefox #0-0] Session ID: 009c7cdf-fa04-4783-8a2f-cddb3b0c17c8
[firefox #0-0] Spec: /home/kwall/gocode/src/github.com/PursuanceProject/pursuance/src/components/Content/TaskManager/TaskManager.test.js
[firefox #0-0] Running: firefox
[firefox #0-0]
[firefox #0-0] TaskManager
[firefox #0-0]   !! should manage tasks
[firefox #0-0]
[firefox #0-0]
[firefox #0-0] 1 pending (2s)
[firefox #0-0]

------------------------------------------------------------------
[firefox #0-1] Session ID: 9ff1d5d6-4674-44c7-bf0d-a31adecc72c1
[firefox #0-1] Spec: /home/kwall/gocode/src/github.com/PursuanceProject/pursuance/src/components/CreatePursuance/CreatePursuance.test.js
[firefox #0-1] Running: firefox
[firefox #0-1]
[firefox #0-1] Creaing a pursuance
[firefox #0-1]   !! should do all off the right things
[firefox #0-1]   !! should not do any of the unright things
[firefox #0-1]
[firefox #0-1]
[firefox #0-1] 2 pending (4s)
[firefox #0-1]

------------------------------------------------------------------
[firefox #0-2] Session ID: 8f7178f9-5a85-45f9-88a0-3769ca81b087
[firefox #0-2] Spec: /home/kwall/gocode/src/github.com/PursuanceProject/pursuance/src/components/Dashboard/Dashboard.test.js
[firefox #0-2] Running: firefox
[firefox #0-2]
[firefox #0-2] Dashboard
[firefox #0-2]   !! should be a dashing board
[firefox #0-2]
[firefox #0-2]
[firefox #0-2] 1 pending (2s)
[firefox #0-2]

------------------------------------------------------------------
[firefox #0-3] Session ID: 1c7fa0f3-6814-4f3b-ab88-ea5990e4b4b5
[firefox #0-3] Spec: /home/kwall/gocode/src/github.com/PursuanceProject/pursuance/src/components/Footer/Footer.test.js
[firefox #0-3] Running: firefox
[firefox #0-3]
[firefox #0-3] Footer
[firefox #0-3]   !! should be about a foot
[firefox #0-3]
[firefox #0-3]
[firefox #0-3] 1 pending (2s)
[firefox #0-3]

------------------------------------------------------------------
[firefox #0-4] Session ID: c213f0ee-ce21-45b8-91a3-955e47487ace
[firefox #0-4] Spec: /home/kwall/gocode/src/github.com/PursuanceProject/pursuance/src/components/HomePage/HomePage.test.js
[firefox #0-4] Running: firefox
[firefox #0-4]
[firefox #0-4] Home Page
[firefox #0-4]   !! should be a homey page
[firefox #0-4]
[firefox #0-4]
[firefox #0-4] 1 pending (2s)
[firefox #0-4]

------------------------------------------------------------------
[firefox #0-5] Session ID: 90bc91e7-7d39-4b5f-92e3-734c33811008
[firefox #0-5] Spec: /home/kwall/gocode/src/github.com/PursuanceProject/pursuance/src/components/NavBar/LogIn/LogIn.test.js
[firefox #0-5] Running: firefox
[firefox #0-5]
[firefox #0-5] Pursuance login
[firefox #0-5]   ✓ should have a Log in link
[firefox #0-5]   ✓ should accept username input
[firefox #0-5]   ✓ should accept password input
[firefox #0-5]   ✓ should accept a valid username/password combination
[firefox #0-5]   !! should have a logout button
[firefox #0-5]   !! should reject an unknown username
[firefox #0-5]   !! should reject an invalid password
[firefox #0-5]
[firefox #0-5]
[firefox #0-5] 4 passing (3s)
[firefox #0-5] 3 pending
[firefox #0-5]

------------------------------------------------------------------
[firefox #0-6] Session ID: a4a20e32-3794-461a-8d14-bef5fe0e0e09
[firefox #0-6] Spec: /home/kwall/gocode/src/github.com/PursuanceProject/pursuance/src/components/NavBar/NavBar.test.js
[firefox #0-6] Running: firefox
[firefox #0-6]
[firefox #0-6] NavBar
[firefox #0-6]   !! should navigate things
[firefox #0-6]
[firefox #0-6]
[firefox #0-6] 1 pending (2s)
[firefox #0-6]

------------------------------------------------------------------
[firefox #0-7] Session ID: 37f70a39-5817-419e-aae9-30c7f9c3c7fa
[firefox #0-7] Spec: /home/kwall/gocode/src/github.com/PursuanceProject/pursuance/src/components/NavBar/SignUp/SignUp.test.js
[firefox #0-7] Running: firefox
[firefox #0-7]
[firefox #0-7] Pursuance sign-up
[firefox #0-7]   !! should let you sign up
[firefox #0-7]
[firefox #0-7]
[firefox #0-7] 1 pending (2s)
[firefox #0-7]



==================================================================
Number of specs: 8


4 passing (21.10s)
11 skipped
```
Only the login tests are implemented, so you can execute only those
tests thus:
```
$ npm run wdio wdio.conf.js --suite login
```
