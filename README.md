# backofshop
This is a back end for an e-commerce website built with the latest technologies, allowing the company to compete with other e-commerce companies. The application uses Express.js API, Sequelize, and MySQL2 to connect to a database and retrieve data for categories, products, and tags. The project includes schema and seed commands to create and populate a development database with test data.
## User Story

```md
AS A manager at an internet retail company 
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

To install and run on your local machine, follow these steps:

- Clone this repository to your local machine
- Install the necessary dependencies

`npm init`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`

Run the Application

`mysql -u root -p`

Enter PW when promted

`source db/schema.sql`

`quit`

`npm run seed`
  
`npm start`

## Demo

### Category Routes


https://user-images.githubusercontent.com/113067058/222092196-de59b7a8-59e6-4ed2-9319-52ecf388c222.mov


### Product Routes


https://user-images.githubusercontent.com/113067058/222092252-ad88716c-fd26-4126-97e8-50d546373f45.mov


### Tag Routes


https://user-images.githubusercontent.com/113067058/222092278-941165df-764b-4d89-8014-1fc0bdca2dc1.mov


## Code Snippets

### GET ROUTE for Tags
This route is using the Express Router to define a `GET` route that retrieves a single tag by its `ID`, and includes associated products. It first calls the Sequelize `findOne()` method with the `ID` parameter from the request. It then includes the associated model `Product` and specifies which attributes to retrieve for it. The retrieved data is returned in JSON format using `res.json()`. If an error occurs, it logs the error to the console and returns a 500 status code with the error in JSON format using `res.status(500).json()`.

```js
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

```

### DELETE Route For Category
This is a route in an Express.js API that handles a `DELETE` request for a category resource. When a client makes a `DELETE` request to the specified endpoint, the server will attempt to delete a category with the ID specified in the request parameters.

First, the Category model's `destroy()` method is called with an object that specifies the ID of the category to be deleted. If the deletion is successful, the response will be a JSON object containing information about the deleted category.

If there is no category with the specified ID, the server will respond with a 404 status code and a JSON object containing an error message. If there is a server error during the deletion process, the server will respond with a 500 status code and a JSON object containing the error message.




```js
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
```

## License

MIT License

Copyright (c) [2022] [Jorge Zamora]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

<a href=”https://www.linkedin.com/in/jorge-zamora-786945250/”>
<img src='https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue'>

![badmath](https://img.shields.io/github/followers/jbxamora?label=JBXAMORA&logoColor=%23fd2423&style=social)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. If the issue goes unresolved for more than a week feel free to contact me at any of the links listed below. Be sure to add me on LinkedIn and Follow me on GitHub to view my course progression. 

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/jbxamora) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/jorge-zamora-786945250//) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' alt='instagram' height='40'>](https://www.instagram.com/jbxamora/) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg' alt='stackoverflow' height='40'>](https://stackoverflow.com/users/20023706/jbxamora)
