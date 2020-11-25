# 2020-fall-cs160-teamspiritworld

Spirit World

Distributing knowledge of resources effectively (info sharing / crowdsourcing web app)

VISION: For current SJSU students who are unaware of many different resources and services that they may need, 
Spirit World is a web application that provides students with easier access to more organized resources. 
Unlike the SAMMY app, our product provides a personalized set of resources based on users’ needs.

For the front end web server, we are using HTML, CSS, JS, React.js, and Express.js, which will be connecting to the app server
with Node.js and Express.js. We are storing the user information into a mongoDB database. 

To validate user login, we plan to check the user input at the sign in and login page, where SJSU students have
to enter a valid SJSU email address. We want users to be able to rate their favorites resources, create a personalized set of resources in a list, and be able
to categorize and filter their searches easily. 

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
    bowling alley/arcade
    Rock climbing
    music rooms
    Judo room in Yoshihiro Hall (provide a direction/location) 


**Getting started: Set up Developer/test environment**

Run the React app. 

To start on launching the application, users must first clone the repository. 

To clone the git repo (using terminal), go to the green “code” button and copy the HTTPS URL link to the clipboard. Then open up the terminal (Mac/Linux) or command prompt (Windows), and enter the following command in any directory of your choosing:
git clone https://github.com/nichui/2020-fall-cs160-teamspiritworld.git

Note: Windows users must have “git” installed in their system. 

Navigate to the 2020-fall-cs160-teamspiritworld folder in the directory and launch the application by running “npm run dev” in the command. There may be several node modules dependency errors when launching the application due to different OS and machines and development tools. For instance, some errors may look like: 
 ./src/reducers/indexRootReducer.js
Module not found: Can't resolve 'redux' in '/Users/<path>/2020-fall-cs160-teamspiritworld-master/client/src/reducers'

The user then has to install the module that is not found, from the example error output above, the user has to “npm install redux”. 

Several node modules I had to install independently on my Mac Catalina machine:
yarn add @ant-design/compatible
npm install express
npm install react
npm install react-scripts
npm install antd
npm i @ant-design/icons
npm install axios
npm install formik
npm install react-dom
npm install react-redux
npm install react-router-dom
npm install react-star-ratings
npm install reactstrap
npm install redux

**Pushing code and creating pull requests**

To push new code into “master” and create a pull request for the team to review. Users must first do a `git checkout -b <newbranch_name>`. To create a branch off of master, enter command: `git checkout -b <branch> origin/master`. There may be some errors pushing from a branch if there’s untracked files and changes to not be committed in the specific branch. 

**NOTE**: Always make sure to check your commits and changes and your branch with `git status` before committing/pushing files. 

At least one member of the team must review the pull request and the member must notify the team of the new pull request before pushing to master. Then the team has to pull or fetch the new changes from master to reflect the new changes in the codebase. 

Example output and clean up:
```
sarah_chi@Sarahs-MacBook-Pro components % git status
On branch sarah
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   ../../../README.md
	modified:   Pages/Profile.js
	modified:   Pages/Signin.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	../../.eslintcache

no changes added to commit (use "git add" and/or "git commit -a")
```

A quick way to get rid of unstaged changes is the command: `git stash save --keep-index --include-untracked`
Users can also use `git clean` to restore and remove changes not staged for commit. 

For bug updates and fixes to the code, users can cherry-pick a commit, that is, pick a commit out of a branch to be pushed to master. This should ideally be used for small bux fixes of a feature. 
