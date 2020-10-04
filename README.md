# 2020-fall-cs160-teamspiritworld

Spirit World

Distributing knowledge of resources effectively (info sharing / crowdsourcing web app)

VISION: For current SJSU students who are unaware of many different resources and services that they may need, 
Spirit World is a web application that provides students with easier access to more organized resources. 
Unlike the SAMMY app, our product provides a personalized set of resources based on users’ needs.

For the front end web server, we are using HTML, CSS, JS, and React, which will be connecting to the app server
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

_chi@Sarahs-MacBook-Pro 2020-fall-cs160-teamspiritworld % npm run dev 

> spiritworld@1.0.0 dev /Users/sarah_chi/Documents/CS 160/SpiritWorld/2020-fall-cs160-teamspiritworld
> concurrently "npm run server" "npm run client"

[0] 
[0] > spiritworld@1.0.0 server /Users/sarah_chi/Documents/CS 160/SpiritWorld/2020-fall-cs160-teamspiritworld
[0] > nodemon server/server.js
[0] 
[1] 
[1] > spiritworld@1.0.0 client /Users/sarah_chi/Documents/CS 160/SpiritWorld/2020-fall-cs160-teamspiritworld
[1] > npm run start --prefix client
[1] 
[0] [nodemon] 2.0.4
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node server/server.js`
[1] 
[1] > spiritworld@0.1.0 start /Users/sarah_chi/Documents/CS 160/SpiritWorld/2020-fall-cs160-teamspiritworld/client
[1] > react-scripts start
[1] 
[1] sh: react-scripts: command not found
[1] npm ERR! code ELIFECYCLE
npm ERR! syscall spawn
[1] npm ERR! file sh
[1] npm ERR! errno ENOENT
[1] npm ERR! spiritworld@0.1.0 start: `react-scripts start`
[1] npm ERR! spawn ENOENT
[1] npm ERR! 
[1] npm ERR! Failed at the spiritworld@0.1.0 start script.
[1] npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
[1] 
[1] npm ERR! A complete log of this run can be found in:
[1] npm ERR!     /Users/sarah_chi/.npm/_logs/2020-10-04T00_34_50_461Z-debug.log
[1] npm ERR! code ELIFECYCLE
[1] npm ERR! errno 1
[1] npm ERR! spiritworld@1.0.0 client: `npm run start --prefix client`
[1] npm ERR! Exit status 1
[1] npm ERR! 
[1] npm ERR! Failed at the spiritworld@1.0.0 client script.
[1] npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
[1] 
[1] npm ERR! A complete log of this run can be found in:
[1] npm ERR!     /Users/sarah_chi/.npm/_logs/2020-10-04T00_34_50_514Z-debug.log
[1] npm run client exited with code 1
[0] SERVER RUNNING

