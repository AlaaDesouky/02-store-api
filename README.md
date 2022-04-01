# Store API
Based on [NodeJS Tutorial](https://www.udemy.com/course/nodejs-tutorial-and-projects-course/) by [John Smilga](https://www.johnsmilga.com/)

### Description
Get a list of products with filter functionality

### Tech used
* NodeJS
* Express
* MongoDB

### Starting the project
Provide db connection key `MONGO_URI` in `./.env` file

### Fields

* **name**: String
* **price**: Number
* **featured**: Boolean
* **rating**: Number
* **createdAt**: Date
* **company**: String ['ikea', 'liddy', 'caressa', 'marcos']


### End points
* **BASE URL** `./api/v1/products`
* **GET ALL PRODUCTS** `/`
* **FIELD FILTERS** `?fields=${,field}`
* **NUMERIC FILTERS** `?numericFilters=${price || rating}${< || <= || = || >= || >}${Number}`
* **SORT** `?sort=${,field}`
* **SELECT** `?select=${,field}`
* **PAGE** `?page=${Number}`
* **LIMIT** `?limit=${Number}`