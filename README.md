# ejam_superheroes
A small full-stack project about making your own superhero!

Information about the project.

The API is built with Node.js and Express and provides endpoints to manage a list of superheroes. The API supports the following operations:

GET /api/superheroes: Retrieve the list of superheroes.
POST /api/superheroes: Add a new superhero.

To use the API you need to follow the steps below:

1) Start the API server by navigating to the /api folder and then do:

    node index.js

2) Then to use the GET superheroes endpoint:

      curl -X GET http://localhost:4001/api/superheroes

3) To use the POST superheroes endpoint (You can use your own name,superpower and humility score!):

      curl -X POST http://localhost:4001/api/superheroes -H "Content-Type: application/json" -d '{"name": "Batman", "superpower": "Detective skills", "humility": 8}'


Alternatively you can use POSTMAN to test the API! 

========================================================================================================================================================================


The UI is built with React using Create React App and Material-UI. It provides a user interface to interact with the API, allowing users to add new superheroes and view the list of existing superheroes.
It communicates with the API using the axios library to make HTTP requests to the API.

To use the app you need to start the development server (for simplicity i didn't add a build):

1) Start the app by navigating to the /ui folder and then do:

  npm start


Now by running the 2 applications you are ready to see it fully functioning by opening your browser and heading to http://localhost:4002.

There you should be able to interact with the UI to add new superheroes and view the list of existing superheroes.


==========================================================================================================================================================================

If i had more time these would be the following things i would consider doing:

1) Make the database to handle the superheroes instead of an array
2) Make UI changes to facilitate the responsiveness and add the touch to make it unique! After all we are superheroes.
3) Add search and filter options for the superheroes.
4) Add stricter rules to the authentication and data validation of making heroes. For example name length, superhero length etc.
5) Deploy the project to a platform like Heroku, azure etc.
6) Add more properties to a hero. After all heroes are not only about their superpowers!






      
