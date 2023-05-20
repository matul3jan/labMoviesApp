# Enterprise Web Development - Assignment 1.

**Name:** Matul Jain

## Overview

The Movies application is a React SPA that displays information about popular movies, upcoming movies, and artists. It uses the Material UI library for design and the TMDB API for movie data. Users can log in using Supabase authentication, view their account information, and favorite movies. React query is used to handle data, and Storybook is used for development. The application is deployed on Vercel.

- Display list of popular movies with pagination.
- Display detailed information about a movie including its title, rating, release date, synopsis, cast, similar movies, and recommended movies.
- Display list of upcoming movies with pagination.
- Display list of artists with pagination.
- Display detailed information about an artist, including their name, photo, bio, and personal info.
- Login and registration with Supabase authentication.
- Display & update user account information, including email, name, photo, and website.
- Add and remove movies from a user's favorites list.
- Use React query to handle data.
- Use Storybook for development.

## Feature Design

#### The Login Page

> Displays a field to input users email address

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715270-e463bdd9-8b2f-46ad-8f31-b9ef987fb97f.png">
</p>

#### The Home Page

> Displays paginated list of movies from popular movies endpoint of TMDB

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715352-7dc5e90c-9383-4f84-95e6-7fecf2cb928c.png">
</p>

#### The Movie details Page

> Displays info, cast, similar & recommended movies for the movie

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715542-68076e0e-6201-46d6-9ddc-c98e28b311d5.png">
</p>

#### The Upcoming Movies feature

> Displays paginated list of movies from the Upcoming movies endpoint of TMDB

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715418-df8b4a5e-2421-4e6d-b4ec-ae01579db5e8.png">
</p>

#### Movies Reviews feature

> Lists all the reviews for a particular movie (text extract only)

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715644-775fce19-f8ea-4b33-ab68-4977f78d3dde.png">
</p>

> Click the 'Full Review' link of an entry in the above list to show the full text of a review

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715658-c0e8f369-6b19-4a82-b149-35faae30db61.png">
</p>

#### The Popular Artists Page

> Displays paginated list of artists from popular person endpoint of TMDB

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715692-7a97a0c5-50e2-46de-9e96-a69f1f20883a.png">
</p>

#### The Artists Details Page

> Displays info of artists

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715742-d479ad5d-1c24-4899-850f-1596cb40bc0d.png">
</p>

#### The Favourites Page

> Displays user marked favourite movies

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715748-3bbdb6f0-d966-4930-a55e-5d3542459540.png">
</p>

#### The Account Page

> Displays & modifies users profile image, email (readonly), name and website

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230715793-cc942c16-f3ed-422e-a847-462c820c0c4d.png">
</p>

## Storybook

> User Account story

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230728348-550335d6-3a80-4707-bcfa-b16b55f6f8dc.png">
</p>

> Artist List story

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230728395-843aeeab-8b22-45d3-8de4-b250f29b1fbd.png">
</p>

> Artist details story

<p align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/26350749/230728444-df5fffe0-c1d3-4bdb-a20f-7720e4a46ea8.png">
</p>

#### Protected features

Only logged in and authenticated users can access the entire application

## Deployment

### Live application - https://movies-app-reactjs.vercel.app/

### Backend API Project - https://github.com/matul3jan/ewd-api-labs-2023
