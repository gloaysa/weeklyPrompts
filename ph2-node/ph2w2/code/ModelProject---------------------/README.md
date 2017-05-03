# Repo for Zell's CRUD, Express and MongoDB tutorial

- [Demo](https://crud-express-mongo.herokuapp.com)
- [Tutorial](http://zell-weekeat.com/crud-express-mongodb)

## Objectives

0. Primary objective is the API
	a. Produce an expected and complete API
	b. Depending on the class, use postman
1. A simply and logically navigated front end
2. Separate, persistent experiences for guests and users
3. No files over 100 lines (require all functionality into server.js)
4. No HTML, ejs, or other mark-up language in your server.js file
4.5. in fact, have nothing but 'app.'' function calls in the server.js
5. Comments in each file describing what (if any) arguments it takes and what it returns  - similar comments on each function
6. The use of promises if callback depth >= 2
7. 

## A JSON API

1. maybe, probably not.  irrelevant if we use postman.

## Possible (suggested) Modules

1. body-parser
2. connect-flash
3. connect-mongo
4. ejs
5. express
6. express-session
7. mongodb
8. mongoose
9. morgan
10. passport
11. passport-local

## Recommended File Structure

1. Have 'model', 'view', and 'controler' subdirectories
	a. organize within these how you will 
	b. assume the next person reading your code is dumb
2. At top level, have only 'server.js', 'README.md', 'package.json', other folders

## server.js file structure

1. Initial comment block briefly describing the project
2. Second comment block describing the file
3. annotated 'require's
4. annotated configurations
	a. 'use's
	b. 'set's
	c. db connections
5. any functions 

## Build to pass these tests 

1. Routes:
	a. user
	b. guest
2. Sessions:
	a. simple persistance test
	b. user
	c. guest
3. MongoDB:
	a. connect, save, retrieve
	b. above + quitting app and restarting
4. Errors:           ---   Undecided which and whether (too much?)  ---
	q. decide which
	r. this can be done with flash messages
5. Mongoose:
	a. mostly like mongo's




