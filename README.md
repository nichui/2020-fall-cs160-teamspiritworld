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


NPM RUN SERVER OUTPUT EXAMPLE

sarah_chi@Sarahs-MacBook-Pro 2020-fall-cs160-teamspiritworld % npm run dev

> spiritworld@1.0.0 dev /Users/sarah_chi/Documents/CS160/SpiritWorld/2020-fall-cs160-teamspiritworld
> concurrently "npm run server" "npm run client"

[1] 
[1] > spiritworld@1.0.0 client /Users/sarah_chi/Documents/CS160/SpiritWorld/2020-fall-cs160-teamspiritworld
[1] > npm run start --prefix client
[1] 
[0] 
[0] > spiritworld@1.0.0 server /Users/sarah_chi/Documents/CS160/SpiritWorld/2020-fall-cs160-teamspiritworld
[0] > nodemon server/server.js
[0] 
[0] [nodemon] 2.0.6
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node server/server.js`
[1] 
[1] > spiritworld@0.1.0 start /Users/sarah_chi/Documents/CS160/SpiritWorld/2020-fall-cs160-teamspiritworld/client
[1] > react-scripts start
[1] 
[0] SERVER RUNNING ON PORT 3002
[0] MongoDB Connected...
[1] ℹ ｢wds｣: Project is running at http://192.168.1.114/
[1] ℹ ｢wds｣: webpack output is served from 
[1] ℹ ｢wds｣: Content not from webpack is served from /Users/sarah_chi/Documents/CS160/SpiritWorld/2020-fall-cs160-teamspiritworld/client/public
[1] ℹ ｢wds｣: 404s will fallback to /
[1] Starting the development server...
[1] 
[1] Compiled with warnings.
[1] 
[1] src/App.js
[1]   Line 6:2:  'Link' is defined but never used  no-unused-vars
[1] 
[1] src/actions/authActions.js
[1]   Line 4:8:   'jwt_decode' is defined but never used      no-unused-vars
[1]   Line 6:3:   'GET_ERRORS' is defined but never used      no-unused-vars
[1]   Line 9:3:   'USER_LOADED' is defined but never used     no-unused-vars
[1]   Line 10:3:  'AUTH_ERROR' is defined but never used      no-unused-vars
[1]   Line 13:3:  'LOGOUT_SUCCESS' is defined but never used  no-unused-vars
[1] 
[1] src/actions/resourceAction.js
[1]   Line 2:9:   'GET_RESOURCES' is defined but never used  no-unused-vars
[1]   Line 2:23:  'GET_RESOURCE' is defined but never used   no-unused-vars
[1]   Line 5:9:   'returnErrors' is defined but never used   no-unused-vars
[1] 
[1] src/components/Layout/AboutUsLink.js
[1]   Line 2:9:  'NavLink' is defined but never used                                                                                                                                                                                                                                                                                                                               no-unused-vars
[1]   Line 8:3:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
[1] 
[1] src/components/Layout/ContactUsLink.js
[1]   Line 2:9:  'NavLink' is defined but never used  no-unused-vars
[1] 
[1] src/components/Layout/FAQLink.js
[1]   Line 2:9:  'NavLink' is defined but never used                                                                                                                                                                                                                                                                                                                               no-unused-vars
[1]   Line 8:3:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
[1] 
[1] src/components/Layout/FavListLink.js
[1]   Line 2:9:  'NavLink' is defined but never used  no-unused-vars
[1] 
[1] src/components/Layout/LoginLink.js
[1]   Line 2:9:  'Link' is defined but never used    no-unused-vars
[1]   Line 4:8:  'Signin' is defined but never used  no-unused-vars
[1] 
[1] src/components/Layout/NavbarLanding.js
[1]   Line 18:4:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
[1] 
[1] src/components/Layout/NavbarUser.js
[1]   Line 2:9:    'Link' is defined but never used                                                                                                                                                                                                                                                                                                                                         no-unused-vars
[1]   Line 17:3:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
[1]   Line 28:9:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
[1]   Line 34:9:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
[1]   Line 38:9:   The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
[1]   Line 40:11:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop                                                                                                                                                                          jsx-a11y/img-redundant-alt
[1]   Line 44:11:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
[1]   Line 45:11:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md         jsx-a11y/anchor-is-valid
[1] 
[1] src/components/Layout/ProfileLink.js
[1]   Line 2:9:  'NavLink' is defined but never used  no-unused-vars
[1] 
[1] src/components/Layout/Resource.js
[1]   Line 2:48:  'Button' is defined but never used    no-unused-vars
[1]   Line 3:10:  'connect' is defined but never used   no-unused-vars
[1]   Line 4:10:  'Redirect' is defined but never used  no-unused-vars
[1] 
[1] src/components/Pages/Contact.js
[1]   Line 3:9:   'Link' is defined but never used        no-unused-vars
[1]   Line 3:15:  'withRouter' is defined but never used  no-unused-vars
[1]   Line 6:8:   'Logo' is defined but never used        no-unused-vars
[1]   Line 7:8:   'Logo1' is defined but never used       no-unused-vars
[1]   Line 8:8:   'Logo2' is defined but never used       no-unused-vars
[1]   Line 9:8:   'Logo3' is defined but never used       no-unused-vars
  Line 10:8:  'Logo4' is defined but never used       no-unused-vars
[1] 
[1] src/components/Pages/FavList.js
[1]   Line 3:9:   'Link' is defined but never used        no-unused-vars
[1]   Line 3:15:  'withRouter' is defined but never used  no-unused-vars
[1] 
[1] src/components/Pages/Home.js
[1]   Line 1:17:  'Component' is defined but never used               no-unused-vars
[1]   Line 2:8:   'PropTypes' is defined but never used               no-unused-vars
[1]   Line 4:10:  'logoutUser' is defined but never used              no-unused-vars
[1]   Line 5:8:   'Navbaruser' is defined but never used              no-unused-vars
[1]   Line 6:9:   'BrowserRouter' is defined but never used           no-unused-vars
[1]   Line 8:9:   'RowGenerator' is defined but never used            no-unused-vars
[1]   Line 8:23:  'GenerateRowsWithBlocks' is defined but never used  no-unused-vars
[1] 
[1] src/components/Pages/LandingPage.js
[1]   Line 3:9:  'Link' is defined but never used    no-unused-vars
[1]   Line 5:8:  'Signin' is defined but never used  no-unused-vars
[1] 
[1] src/components/Pages/Register.js
[1]   Line 4:9:      'Link' is defined but never used       no-unused-vars
[1]   Line 5:9:      'Formik' is defined but never used     no-unused-vars
[1]   Line 6:8:      'PropTypes' is defined but never used  no-unused-vars
[1]   Line 113:204:  No duplicate props allowed             react/jsx-no-duplicate-props
[1]   Line 118:210:  No duplicate props allowed             react/jsx-no-duplicate-props
[1]   Line 124:190:  No duplicate props allowed             react/jsx-no-duplicate-props
[1]   Line 128:260:  No duplicate props allowed             react/jsx-no-duplicate-props
[1]   Line 134:276:  No duplicate props allowed             react/jsx-no-duplicate-props
[1] 
[1] src/components/Pages/Signin.js
[1]   Line 5:9:     'Formik' is defined but never used                                                                                                                                                                                                                                                                                                                                no-unused-vars
[1]   Line 95:188:  No duplicate props allowed                                                                                                                                                                                                                                                                                                                                        react/jsx-no-duplicate-props
[1]   Line 98:205:  No duplicate props allowed                                                                                                                                                                                                                                                                                                                                        react/jsx-no-duplicate-props
[1]   Line 102:13:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
[1] 
[1] src/reducers/authReducer.js
[1]   Line 22:3:  Unexpected default export of anonymous function  import/no-anonymous-default-export
[1] 
[1] src/reducers/errorReducer.js
[1]   Line 8:1:  Unexpected default export of anonymous function  import/no-anonymous-default-export
[1] 
[1] src/reducers/resourceReducer.js
[1]   Line 27:5:  'RESOURCES_LOADING' is defined but never used    no-unused-vars
[1]   Line 40:1:  Unexpected default export of anonymous function  import/no-anonymous-default-export
[1] 
[1] src/utils/helpers.js
[1]   Line 1:9:  'Link' is defined but never used  no-unused-vars
[1] 
[1] Search for the keywords to learn more about each warning.
[1] To ignore, add // eslint-disable-next-line to the line before.
