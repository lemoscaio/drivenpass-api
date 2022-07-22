<p align="center">
  <img  src="https://i.ibb.co/tBC6CgV/2525754.png"
    width="200px" height="200px" >
</p>
<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

Drivenpass simulates a password manager. You can create an account and save your website passwords, card data etc.

</br>

## Features

-   Create an account
-   Save credentials
-   Save private notes
-   Save card data
-   Save data from a WiFi network

</br>

## API Reference

#### SignUp

```http
POST /sign-up
```

#### Request:

| Body       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | **Required**. valid email |
| `password` | `string` | **Required**. password    |

`Password min length: "10"`

#

#### SignIn

```http
POST /sign-in
```

#### Request:

| Body       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | **Required**. valid email |
| `password` | `string` | **Required**. password    |

</br>

#### Response:

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbC26IkZhYnJjaW8yOUB5YWhvby5jb20iLCJpYXQiOjE2NTgxNzQwNTh9.dQ0JA1VMM7rAyFwaC-_AG9gDyrTDhOv1eoW1DNVpqOs"
}
```

<br/>

### Authorization

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. valid token |

`Authorization format: Bearer jsonwebtoken`

**All following routes request authorization header**

<br/>

# Credentials

#### Create a new credential

```http
POST /credentials
```

#### Request:

| Body       | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `url`      | `string` | **Required**. valid url            |
| `label`    | `string` | **Required**. label for credential |
| `login`    | `string` | **Required**. login                |
| `password` | `string` | **Required**. password             |

</br>

#### Response:

```json
{
	"id": 6,
	"userId": 2,
	"label": "reintermediate",
	"url": "http://yearly-paddock.org",
	"login": "AnaClara_Carvalho",
	"password": "Vd_9SotPnbxNHgz",
	"createdAt": "2022-07-18T19:55:12.178Z"
}
```

#

#### Get all credentials associated with the user

```http
GET /credentials
```

#### Response:

```json
[
	{
		"id": 5,
		"userId": 2,
		"label": "Estados",
		"url": "http://turbulent-sick.com",
		"login": "Elisa.Reis67",
		"password": "tvgH8GHVmujxzDR",
		"createdAt": "2022-07-18T19:55:01.970Z"
	},
	{
		"id": 2,
		"userId": 2,
		"label": "quantifying",
		"url": "https://fluid-livestock.info",
		"login": "Nataniel_Costa23",
		"password": "EW2gCF33leW1944",
		"createdAt": "2022-07-18T19:54:20.961Z"
	}
]
```

#

#### Get a credential by identifier

```http
GET /credentials/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 21,
	"userId": 2,
	"label": "SSD",
	"url": "https://wretched-arrangement.org",
	"login": "Guilherme_Albuquerque59",
	"password": "603OwDcuyQePNsC",
	"createdAt": "2022-07-18T02:50:31.579Z"
}
```

#

#### Delete a credential by identifier

```http
DELETE /credentials/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Notes

#### Create a new note

```http
POST /notes
```

#### Request:

| Body    | Type     | Description                  |
| :------ | :------- | :--------------------------- |
| `title` | `string` | **Required**. label for note |
| `body`  | `string` | **Required**. Note content   |

`Title max length: 50`

`Body max length: 1000`

</br>

#### Response:

```json
{
	"id": 5,
	"userId": 2,
	"title": "Rondônia",
	"body": "Qui dolores magni non qui omnis sequi magni distinctio. Nostrum reiciendis rem sapiente esse voluptatem accusantium magni saepe dignissimos. Enim facere quos asperiores explicabo ratione error autem necessitatibus perferendis. Sapiente aut consectetur ut aperiam iste aut rem hic. Vitae sit omnis iste. Sint ipsa aut ipsam occaecati neque et.",
	"createdAt": "2022-07-18T20:14:42.142Z"
}
```

#

#### Get all notes associated with the user

```http
GET /notes
```

#### Response:

```json
[
	{
		"id": 3,
		"userId": 2,
		"title": "Shilling",
		"body": "Sed veniam architecto unde. Iure numquam quos consequatur occaecati.",
		"createdAt": "2022-07-18T20:14:26.813Z"
	},
	{
		"id": 2,
		"userId": 2,
		"title": "Feito",
		"body": "Sit suscipit temporibus delectus. Eum qui ullam iste explicabo adipisci. Delectus recusandae deleniti architecto.",
		"createdAt": "2022-07-18T19:54:23.666Z"
	}
]
```

#

#### Get a note by identifier

```http
GET /notes/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 4,
	"userId": 2,
	"title": "Congelado",
	"body": "Natus doloribus consequatur quasi eaque rerum. Blanditiis commodi ut. Omnis consequatur voluptatum fugit veniam voluptatem. Soluta omnis doloremque laboriosam voluptates. Rerum eligendi voluptatem explicabo ipsa reiciendis ab. Quidem iure ut praesentium porro animi eos earum quas.",
	"createdAt": "2022-07-18T20:14:34.477Z"
}
```

#

#### Delete a note by identifier

```http
DELETE /notes/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Cards

#### Create a new card

```http
POST /cards
```

#### Request:

| Body             | Type      | Description                                     |
| :--------------- | :-------- | :---------------------------------------------- |
| `label`          | `string`  | **Required**. label for card                    |
| `number`         | `string`  | **Required**. card number                       |
| `cardholder`     | `string`  | **Required**. cardholder name                   |
| `securityCode`   | `string`  | **Required**. card security code                |
| `password`       | `string`  | **Required**. card password                     |
| `expirationDate` | `string`  | **Required**. card expiration date              |
| `isVirtual`      | `boolean` | **Required**. either the card is virtual or not |
| `type`           | `string`  | **Required**. card type                         |

`Date format: MM/YY`

`Valid types: ["credit", "debit", "creditAndDebit"]`

</br>

#### Response:

```json
{
	"id": 4,
	"userId": 2,
	"label": "Auto Loan Account",
	"number": "6759-0685-1816-7371",
	"cardholder": "Sarah Kennedy Oliveira",
	"securityCode": "848",
	"password": "1234",
	"expirationDate": "07/27",
	"isVirtual": false,
	"type": "credit",
	"createdAt": "2022-07-18T20:14:54.415Z"
}
```

#

#### Get all cards associated with the user

```http
GET /cards
```

#### Response:

```json
[
	{
		"id": 4,
		"userId": 2,
		"label": "Auto Loan Account",
		"number": "6759-0685-1816-7371",
		"cardholder": "Sarah Kennedy Oliveira",
		"securityCode": "848",
		"password": "1234",
		"expirationDate": "07/27",
		"isVirtual": false,
		"type": "credit",
		"createdAt": "2022-07-18T20:14:54.415Z"
	},
	{
		"id": 2,
		"userId": 2,
		"label": "Investment Account",
		"number": "3668-533189-7385",
		"cardholder": "Cecília Alex Moreira",
		"securityCode": "504",
		"password": "1234",
		"expirationDate": "07/27",
		"isVirtual": false,
		"type": "credit",
		"createdAt": "2022-07-18T19:54:26.436Z"
	}
]
```

#

#### Get a card by identifier

```http
GET /cards/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 10,
	"userId": 7,
	"label": "Credit Card Account",
	"number": "6304998735290046",
	"cardholder": "Marcela Billie Batista",
	"securityCode": "206",
	"password": "1234",
	"expirationDate": "07/27",
	"isVirtual": false,
	"type": "credit",
	"createdAt": "2022-07-17T09:00:10.552Z"
}
```

#

#### Delete a card by identifier

```http
DELETE /cards/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Network

#### Create data from a new wifi network

```http
POST /networks
```

#### Request:

| Params     | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `label`    | `string` | **Required**. label for network   |
| `ssid`     | `string` | **Required**. network name (SSID) |
| `password` | `string` | **Required**. network password    |

`SSID max length: "32"`
</br>

#### Response:

```json
{
	"id": 2,
	"userId": 2,
	"label": "Gardens",
	"ssid": "Account Health",
	"password": "930b7c80e44de8573ed647c5ab4c507f7509038ac14303ff8a72a854b0c8cf10a82d951d148a359a8a1196ffe990bccb4ee48e7722d355ab2665d48cfb45d2d25831e278849bc4e03312dc298fe684fc6af78165592f972478f58f83780a3224d59c7fba93349c3cd3523d0ebcef77",
	"createdAt": "2022-07-18T19:54:28.778Z"
}
```

#

#### Get all networks associated with the user

```http
GET /networks
```

#### Response:

```json
[
	{
		"id": 11,
		"userId": 8,
		"label": "Concrete alarm azure",
		"ssid": "navigating",
		"password": "DfgwNb6G1hblqSU",
		"createdAt": "2022-07-17T09:34:32.675Z"
	},
	{
		"id": 15,
		"userId": 8,
		"label": "Electronic Fiji Malaysia",
		"ssid": "Dollar Oman",
		"password": "dY_OWamnfrljAhg",
		"createdAt": "2022-07-17T09:39:22.106Z"
	}
]
```

#

#### Get a network by identifier

```http
GET /networks/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 18,
	"userId": 8,
	"label": "Pants",
	"ssid": "compressing ivory Slovenia",
	"password": "ABJWpAXkXCwgxKr",
	"createdAt": "2022-07-17T09:40:41.395Z"
}
```

#

#### Delete a network by identifier

```http
DELETE /networks/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>


# Documents

#### Create a new document register

```http
POST /documents
```

#### Request:

| Body             | Type     | Description                                    |
| :--------------- | :------- | :--------------------------------------------- |
| `type`           | `string` | **Required**. document type                    |
| `fullName`       | `string` | **Required**. person's full name               |
| `number`         | `string` | **Required**. document number                  |
| `expirationDate` | `string` | **Required**. document expiration date         |
| `issuedBy`       | `string` | **Required**. which entity issued the document |

`Date format: Free format since each document can have it's unique format`

`Valid types: ["driverLicense, idCard"]`

</br>

#### Response:

```json
{
	"id": 2,
	"userId": 2,
	"type": "driverLicense",
	"fullName": "Théo Phoenix Melo",
	"number": "838021377693109",
	"expirationDate": "21/07/2029",
	"issuedBy": "Bashirian Group",
	"createdAt": "2022-07-18T19:54:30.842Z"
}
```

#

#### Get all documents associated with the user

```http
GET /documents
```

#### Response:

```json
[
	{
		"id": 6,
		"userId": 2,
		"type": "driverLicense",
		"fullName": "Márcia Addison Reis",
		"number": "505462480367314",
		"expirationDate": "21/07/2029",
		"issuedBy": "Bednar, Johns and Crona",
		"createdAt": "2022-07-17T10:15:37.685Z"
	},
	{
		"id": 5,
		"userId": 2,
		"type": "driverLicense",
		"fullName": "Breno James Reis",
		"number": "86508874967312",
		"expirationDate": "21/07/2029",
		"issuedBy": "Kuphal - Harris",
		"createdAt": "2022-07-17T10:15:36.580Z"
	}
]
```

#

#### Get a documents by identifier

```http
GET /documents/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 2,
	"userId": 1,
	"type": "driverLicense",
	"fullName": "Joaquim Sawyer Nogueira",
	"number": "918733683739487",
	"expirationDate": "21/07/2029",
	"issuedBy": "Windler - Barton",
	"createdAt": "2022-07-17T10:11:33.430Z"
}
```
#

#### Delete a document by identifier

```http
DELETE /documents/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number`

`MODE = "PROD" or "DEV"`

`SECRET_KEY = any string`

`JWT_SECRET = "any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/lemoscaio/projeto19-drivenpass
```

Go to the project directory

```bash
  cd projeto19-drivenpass/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npx prisma migrate reset
```

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript

</br>

## Acknowledgements

-   [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

-   [@lemoscaio](https://www.github.com/lemoscaio) 🪐

