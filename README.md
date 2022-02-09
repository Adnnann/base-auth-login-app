# Description

This is simple base login app implemented in node. For authentication jwt token is used. Token is stored in httponly cookie and validation on protected user page is done with passport and passport-jwt strategy. For storing data Atlas MonggoDB is used. Validation of user data is done with moongose-validator and moongose-unique-validator

## Important notes

In order to use the app zou shound change in server/config/config.js url for Atlas Mongo DB database and in .env file you should store following data:

DATABASE=base-login (I will delete this after grading is done)
PASSWORD=INKKQBsWYt0gdI4W (I will delete this after grading is done)

## Components

App includes five components:

1. Header
2. MainPage
3. Protected (private user route)
4. Signin
5. Signout

Components can be easily integrated into any app that requires authentication