# Movies Application

This is a Movies Application that uses the Material UI design library for its user interface and the API from TMDB (The Movie Database) to display information about movies and artists.

## Features

- Uses Material UI for design
- API from TMDB
- List of movies (with pagination)
- Movie details page has cast, similar & recommended movies sections
- List of upcoming movies (with pagination)
- List of artists (with pagination)
- Artist details page has bio and personal info
- Favourites (persisted in Supabase)
- User login (auth using Supabase)
- User account (persisted in Supabase - email, name, photo, website)
- Uses React Query to handle data
- Uses Storybook for development
- Deployment (Vercel)

## Demo

A live demo of this application can be found at [https://movies-app-reactjs.vercel.app/](https://movies-app-reactjs.vercel.app/)

## Installation

To run this application locally, you need to have Node.js installed on your system. Once you have Node.js installed, follow the steps below:

1. Clone this repository
2. Navigate to the root folder of the repository in your terminal
3. Run `npm install` to install the required dependencies
4. Create `.env` file in root folder of the repo and add your Supabase credentials (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) and TMDB API (VITE_TMDB_KEY) key
5. Run `npm start` to start the development server
6. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application
