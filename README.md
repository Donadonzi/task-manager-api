# Task Manager API

## About

*	A CRUD RESTful API built with `Node.js`, `Express`, `MongoDB` and `Mongoose ODM`
*	Deployed using `Heroku` and `MongoDB Atlas`
*	User authentication with `JSON Web Token`
*	Automated email using `SendGrid`
*	Endpoint testing using `Jest` and `SuperTest` 

## Environment variables

   In order to run the server, you need to create `dev.env` file in `/config` with the following content:

```
PORT=5000
MONGODB_URL=mongodb://127.0.0.1:27017/<DB_NAME>
SENDGRID_API_KEY=<SENDGRID_API_KEY>
JWT_SECRET=<JWT_SECRET>
```

