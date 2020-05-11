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
  - [Server](#client) 


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
</br>
Frontend Deployment - Netlify

### Wireframe
![WireframeHero](./readmeDoc/theRecipeBox_wireframe1.png)
![WireframeHero](./readmeDoc/theRecipeBox_wireframe2.png)

### Client Directory
![ClientDirectory](./readmeDoc/client_directory.png)

### Component Breakdown
![Components](./readmeDoc/components.png)

Component Type state props Description
| Component |  Type  | State | Props | Description |
Header | functional | n | y | The header will contain the logo and login button.  The user name will be passed into header via props. |
Main | class | y | n | The main will store/track the API recipe data and render the sections. |
HeroSection | functional | n | n | The section rendering the hero image. |
PopularSection | functional | n | n | The section rendering images of the popular recipes. |
JoinSection | functional | n | n | The section for user login and register buttons. |
CatagorySection | functional | n | y | The section to render the recipe catagories for user to click into. |

## Server
Back End

The Server will be developed using Rails

ERD Model
![ERD Model](./readmeDoc/theRecipeBox.png)


database_db
|** users/
|** recipes/
|\_\_ recipesInfo/

## Data Heirarchy
### Endpoints from the API:
  ./Home/
  ./Home/Login
  ./Home/ShowRecipeList
  ./Home/ShowRecipeList/:id
  ./Home/Create

## Dependencies

| Library | Description |
| React | React Frontend |
| React Router | |
| CORS | Render Front End |
| Ruby | |
| Rails | |

Post-MVP
Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

Code Showcase
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

Code Issues & Resolutions
Use this section to list of all major issues encountered and their resolution, if you'd like.
