![theRecipeBox logo](./readmeDoc/theRecipeBox_Hero.png)

# theRecipeBox

## Table of Contents
- [Overview](#overview)
  - [Project Team](#project-team)
  - [Project Description](#project-description)
  - [Core Features](#core-features)
- [Design](#design)
  - [Client](#client) 
      - [Wireframes](#wireframes)


# Overview
## Project Team
  Created, designed, and developed by [Kay Chan](https://github.com/kaych26)

## Project Description
  theRecipeBox is a digtial portal for individuals to upload and share their favorite recipes. During this pandemic time, many are facing challenges on what to cook for their families. This app will allow individuals to connect by sharing their recipes and cooking ideas.

## Core Features
The user can browse through the recipes with or without logging in. To upload a recipe, the user will need to create a user account. The owner of the recipe has the ability to update and delete the recipe.


# Design

## Client
  Frontend - React
  Frontend Deployment - Netlify

### Client Directory
![ClientDirectory](./readmeDoc/client_directory.png)

### Desktop Hero
![WireframeHero](./readmeDoc/theRecipeBox_wireframe/Home_Before_Login.png)

### Component Breakdown
![Components](./readmeDoc/components.png)

Component Type state props Description
Header: functional n n The header will contain the logo and login.
Main class y n The main will store/track the API recipe data and render the sections.
HeroSection functional n n The section rendering the hero image.
PopularSection functional n n The section rendering images of the popular recipes.
JoinSection functional n n The section for user login and register buttons.
CatagorySection functional n y The section to render the recipe catagories for user to click into.

Server (Back End)
ERD Model
![ERD Model](./readmeDoc/theRecipeBox.png)
Use this section to display an image of a computer generated ERD model.

database_db
|** users/
|** recipes/
|\_\_ recipesInfo/

Data Heirarchy
ints from the API:
Home/
Home/Login
Home/ShowRecipeList
Home/ShowRecipeList/:id
Home/Create

Dependencies
Use this section to list all supporting libraries and dependencies, and their role in the project.

Library Description
React Router
Rails

Post-MVP
Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

Code Showcase
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

Code Issues & Resolutions
Use this section to list of all major issues encountered and their resolution, if you'd like.
