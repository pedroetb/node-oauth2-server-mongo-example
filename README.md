# node-oauth2-server with MongoDB example

This is a basic example of a OAuth2 server, using [node-oauth2-server](https://github.com/oauthjs/node-oauth2-server) with MongoDB storage and the minimum (only the required to work) model configuration.

If you want a simpler example without MongoDB storage, you should go to [node-oauth2-server-example](https://github.com/pedroetb/node-oauth2-server-example) instead.

## Setup

First, you should have [MongoDB](https://www.mongodb.com/) installed and running on your machine.

You also need to install **nodejs** and **npm** and then, simply run `npm install` and `npm start`. The server should now be running at `http://localhost:3000`.

## Usage

### Checking example data

Firstly, you should create some entries in your **MongoDB** database.

You need to add a client. For example:

* **clientId**: `application`
* **secret**: `secret`

And you have to add a user too. For example:

* **username**: `pedroetb`
* **password**: `password`

> You can call the `loadExampleData` function at `model.js`in order to create these entries automatically.

### Obtaining a token

To obtain a token you should POST to `http://localhost:3000/oauth/token`, including the client credentials in request headers and the user credentials and grant type in request body:

* **Headers**
	* **Authorization**: `"Basic " + clientId:secret base64'd`
		* (for example, to use `application:secret`, you should send `Basic YXBwbGljYXRpb246c2VjcmV0`)

	* **Content-Type**: `application/x-www-form-urlencoded`
* **Body**
	* `grant_type=password&username=pedroetb&password=password`
		* (contains 3 parameters: `grant_type`, `username` and `password`)

If all goes as planned, you should receive a response like this:

```
{
	"token_type": "bearer",
	"access_token": "72ab415822b56cf0f9f93f07fe978d9aae859325",
	"expires_in": 3600
}
```

### Using the token

Now, you can use your brand-new token to access restricted areas. For example, you can GET to `http://localhost:3000/` including your token at headers:

* **Headers**
	* **Authorization**: `"Bearer " + access_token`
		* (for example, `Bearer 72ab415822b56cf0f9f93f07fe978d9aae859325`)
