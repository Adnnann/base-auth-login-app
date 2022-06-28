# Description

This is simple login app implemented in node. For authentication jwt token is used. Token is stored in httponly cookie and validation on protected user page is done with passport and passport-jwt strategy. For storing data Atlas MonggoDB is used. Validation of user data is done with moongose-validator and moongose-unique-validator

## Important notes

In order to use the app you shound change in server/config/config.js url for Atlas Mongo DB database and in client/.env file you should store following data:

DATABASE=YOUR DATABASE NAME
<br />
PASSWORD=YOUR PASSWORD

## Components

App includes five components:

1. Header
2. MainPage
3. Protected (private user route)
4. Signin
5. Signout

Components can be easily integrated into any app that requires authentication
