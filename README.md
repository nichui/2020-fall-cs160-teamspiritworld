# 2020-fall-cs160-teamspiritworld

# Spirit World

Distributing knowledge of resources effectively (info sharing / crowdsourcing web app)

VISION: For current SJSU students who are unaware of many different resources and services that they may need, 
Spirit World is a web application that provides students with easier access to more organized resources. 
Unlike the SAMMY app, our product provides a personalized set of resources based on users’ needs.

For the front end web server, we are using HTML, CSS, JS, and React.js, which will be connecting to the app server
with Node.js and Express.js. We are storing the user information into a mongoDB database. 

To validate user login, we check the user input at the sign in and login page, where SJSU students have
to enter a valid SJSU email address. Users are able to rate their favorites resources, create a personalized set of resources in a list, and be able
to categorize and filter their searches easily. 
```
Some brainstorm ideas for function/resources to be implemented:
  Connections (not faculty) → how info spreads (via classmates/peers/friends)
  Food pantry
  Be able to filter out resources (educational, food, tech, spaces (private rooms-music), health, transportation, etc.) to help people easily find things
  “Rate my professor” → rate available resources 
  Categorize resources & then filter them out
  Resources (that not many students know) on campus:
    Food pantry
    ENGR SCE Club Room → cheaper snacks 
  Recreation:
    VR room in MLK + recording room and drumset in 4th floor MLK
    Bowling alley/arcade
    Rock climbing
    Music rooms
    Judo room in Yoshihiro Hall (provide a direction/location) 
```

### Getting started: Set up Developer/test environment

Run the web application. 

You must also have the Chrome Redux extension installed to resolve "type error" compile issues.
The extension can be downloaded at https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd.

To start on launching the application, users must first clone the repository. 

To clone the git repo (using terminal), go to the green “code” button and copy the HTTPS URL link to the clipboard. Then open up the terminal (Mac/Linux) or command prompt (Windows), and enter the following command in any directory of your choosing:
`git clone https://github.com/nichui/2020-fall-cs160-teamspiritworld.git`

Note: Windows users must have `git` installed in their system. 

Navigate to the `2020-fall-cs160-teamspiritworld` folder in the directory and launch the application by running `nodemon App.js`. 
There may be node module dependency errors where some modules have to be installed independently (due to compatibility issues across different machines). In this case, the user must `npm install <missing_module>`.

### Pushing code and creating pull requests

To push new code into the “master” branch and create a pull request for the team to review, users must first do a `git checkout -b <newbranch_name>`. To create a branch off of master, enter command: `git checkout -b <branch> origin/master`. There may be some errors pushing from a branch if there are untracked files and changes not to be committed in the specific branch. New branches are created for each feature and for each individual member to push bug fixes or other specific changes to be implemented in the sprint backlog. The backlog can be accessed at https://www.notion.so/58e4ee83589142ff8d50e99c895ee2ae?v=d5db39d357dd489396e24b61855c0fbf. 

**NOTE**: Always make sure to check your commits and changes and your branch with `git status` before committing/pushing files. 

At least one member of the team must review the pull request and the member must notify the team of the new pull request before pushing to master. Then the team has to pull or fetch the new changes from master to reflect the new changes in the codebase. If there are merge conflicts in the pull request, they must be resolved before pushing to master. Users must NEVER force push from a branch to master if there are merge conflicts. It is recommended to resolve any git issues before force pushing from your branch. 

To clean up untracked files, users must do a `git add` of the specified file changes, and discard other file changes that are not to be committed. 
Example output and clean up:
```
sarah_chi@Sarahs-MacBook-Pro 2020-fall-cs160-teamspiritworld % git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	client/
	node_modules/.bin/acorn
	node_modules/.bin/ansi-html
	node_modules/.bin/atob
```

A quick way to get rid of unstaged changes is the command: `git stash save --keep-index --include-untracked`.
Users can also use `git clean` to restore and remove changes not staged for commit. 

For bug updates and fixes to the code, users can `git cherry-pick` a commit, that is, pick a commit out of a branch to be pushed to master. This should ideally be used for small bux fixes of a feature. 

External links that may be helpful:
https://git-scm.com/docs
https://git-scm.com/docs/git-cherry-pick

### Backend REST APIs - Routes for Resources

| Resource Operation | URI (HTTP) | Method HTTP | Description |
| -------- | ---------| --------| -------------|
|  Retrieve all resources  | /resources    | GET   | Display the list of all resources |
|  Add new resource	   | /resources/AddResource | POST | Create a new resource into the database |
|  Retrieve/access to a resource | /resources/:id   | GET  | Display a resource from the database |
|  Update a resource | /resources/:id | PUT | Modify/update an existing resource (Admin access only) |
|  Delete a resource | /resources/:id | DELETE | Remove an existing resource from the list (Admin access only) |
|  Retrieve an editing form of a resource | /resouces/:id/EditResource | GET | Display the edit page of a resource (Admin access only) |

### Backend REST APIs - Routes for authentication
| Resource Operation | URI (HTTP) | Method HTTP | Description |
| -------- | ---------| --------| -------------|
|  Retrieve form for registration | /register | GET | Display the signup form for users |
|  Create new user | /register | POST | Add new user into the database |
|  Retrieve form for signin | /login | GET | Display a signin form for user |
|  User Login | /login | POST | Authenticate user for access to the web app | 

### Backend REST APIs - Routes for reviews

| Resource Operation | URI (HTTP) | Method HTTP | Description |
| -------- | ---------| --------| -------------|
| Create a review | /resources/:id/reviews | POST | Post a review/comment(s) for individual resource |
| Delete a review | /resources/:id/reviews/:reviewId | DELETE | Remove a review/comment(s) from specific resource |



### Backend API testing

Our team uses Postman to test the backend API requests for the users.

Setup: Download Postman from https://www.postman.com/downloads/

Open up Postman. 

Example Request: API call for registering a user during sign up.

Click next to Runner on top left, the square icon with the plus sign. And open up a new tab. Type “http://local:3002/api/users/register” to the text field.

Go to the body tab, type in some data: Example below
```
{
     "firstname": "James",
      "lastname":"Jones",
      "email":"james.jones@sjsu.edu",
     "password": "password123",
     "password2": "password123" 
}
```

and select the “raw” and “JSON” option

Make sure the request is POST. You should be able to see the response at the bottom, and the status on the top right of the bottom field. For failed API calls, you will get a `Status: 404 Not Found`.

External links that may be helpful: 
https://learning.postman.com/docs/sending-requests/requests/

### Automated Testing 

*Documentation for Selenium build and setup.*

Technical notes (setup and development of test script) 
Download Selenium libraries from: https://github.com/SeleniumHQ/selenium/wiki/Getting-Started

NOTE: Build path to Selenium archive to JAR file by exporting environment variable “CLASSPATH” (can look at environmental variables with command “printenv” on Mac, and “set” on Windows). I included some Windows and Mac commands since we all use different OS.
For instance, I created a folder “javaLib” under my Documents directory to hold the contents from unzipping the JAR file.

You may first try to compile in the Eclipse IDE, but this may result in errors because of build path issues. If it doesn’t build in Eclipse, you can read some notes below to run commands in terminal to set up your development environment and set up Selenium.

* Downloaded JAR file must be unzipped (jar xf selenium-server-standalone-3.9.1.jar)  
* CLASSPATH should point to that directory 
    * pwd → get current directory path (mac)  
        * echo %cd% (windows) 
    * cp <selenium downloaded file> <new path to store JAR file> (Mac) 
        * copy <selenium download file> <new path to store JAR file> (windows) 
    * Example command I used to set env variable: 
        * export CLASSPATH=/Users/schi/Documents/javaLib/selenium-server-standalone-3.9.1 (Mac) 
        * set CLASSPATH=/Users/schi/Documents/javaLib/selenium-server-standalone-3.9.1 (Windows) 
    * The path MUST BE the path to the selenium unzipped contents, NOT the jar file itself 
* Selenium archive link and version I used: http://selenium-release.storage.googleapis.com/index.html?path=3.9/ 
After setting up the development environment, run the example Java program from https://github.com/SeleniumHQ/selenium/wiki/Getting-Started

**Manual Testing**
In addition to automated testing, the team also did some manual testing by clicking the links on the navigation bar, registering, logging in, and adding new resources. Other manual testing included leaving a review on a resource, deleting a review on that resource, and adding new images. 

External links that may be helpful: 
https://www.selenium.dev/documentation/en/
https://docs.cypress.io/guides/getting-started/writing-your-first-test.html


### Database MongoDB Cluster setup

We use MongoDB for our database. We store the data in a cloud database using MongoDB Atlas so that the resources data can be linked for all team members. 
You can link MongoDB Compass (the GUI) to the cluster. 
You can log in through this link: https://account.mongodb.com/account/login to view the cluster and data. 

MongoDB Compass can be downloaded at https://www.mongodb.com/products/compass.

Set up Connection Security and connect to MongoDB Compass with the connection string. 
To deploy a new cluster, check out this external link to the MongoDB Cloud documentation: https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/#procedure.

This includes all the set up for development environment, backend, and testing. 

### NPM RUN DEV SERVER OUTPUT EXAMPLE
```
sarah_chi@Sarahs-MacBook-Pro 2020-fall-cs160-teamspiritworld % nodemon app.js 
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Serving on port 3000
Database connected

```
