# theRecipeBox
Overview
Core Features
Goals
Team
Permissions
MVP
Client (Front End)
Wireframes
Component Hierarchy
Component Breakdown
Component Estimates
Server (Back End)
ERD Model
Data Heirarchy
Data Heirarchy
Dependencies
Post-MVP
Code Showcase
Code Issues & Resolutions

Overview
theRecipeBox is a digtial portal for individuals to upload and share their favorite recipes.  During this pandemic time, many are facing challenges on what to cook for their families. This app will allow individuals to connect by sharing their recipes and cooking ideas.

Core Features
The user can browse through the recipes with or without logging in.  To upload a recipe, the user will need to create a user account.  The owner of the recipe has the ability to update and delete the recipe.

Permissions
Digital assets used with full licensing and permission from Death to Stock Photo, Freepik, and Unsplash. Custom digital design and branding by John Lansing. Digital assets stored locally and on Imgur.


MVP

Client (Front End)

Frontend - React
Frontend Deployment - Netlify

![Wireframe](./readmeDoc/client_directory.png)


Dummy Link

Desktop Landing
Dummy Link

Desktop Hero
Dummy Link

Resource Index
Dummy Link

Resource Show
Dummy Link

Tablet Resource Index
Dummy Link

Mobile Resource Index
Component Hierarchy
Use this section to define your React components and the data architecture of your app.

client

![](./readmeDoc/clientdirectory.png)

Component Breakdown

![](./readmeDoc/components.png)

Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

Component	Type	state	props	Description
Header	functional	n	n	The header will contain the logo and login.
Navigation	functional	n	n	The navigation will provide a link to each of the pages.
Main	class	y	n	The main will store/track the API recipe data and render the sections.
HeroSection functional	n	n	The section rendering the hero image.
PopularSection functional	n	n	The section rendering images of the popular recipes.
JoinSection functional	n	n	The section for user login and register buttons.
CatagorySection	functional	n	y	The section to render the recipe catagories for user to click into.


Server (Back End)
ERD Model
![ERD Model](./readmeDoc/theRecipeBox.png)
Use this section to display an image of a computer generated ERD model.

Data Heirarchy
Use this section to display the database, table, and attribute heirarchy.


database_db
|__ users/
|__ resources/
|__ posts/

Data Heirarchy
The expected endpoints from the API:
   Home/
   Home/Login
   Home/ShowRecipeList
   Home/ShowRecipeList/:id
   Home/Create

Dependencies
Use this section to list all supporting libraries and dependencies, and their role in the project.

Library	Description
React Router
Rails 
This section is not necessary for your pitch!

Post-MVP
Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

Code Showcase
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

Code Issues & Resolutions
Use this section to list of all major issues encountered and their resolution, if you'd like.

