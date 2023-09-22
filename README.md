# formula-api

Welcome to Formula-api, an API Rest to obtain the data from your best formula1 drivers!

# Installation

This step will help you to install the environement to use the API in a local usage.

Guide step by step:
- Git clone this repository
- npm install 
- create a prostgres database
- create .env file from .env.example and inform your database connection as well as PRIVATE_KEY for tokenization
- Launch the server with npm run dev

# Getting started

- Request POST /users to create a user
- Request routes with token (Authorization), username and password (Header)
