const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;

export const getMovies = (page) =>
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        }).catch((error) => {
            throw error
        });

export const getMovie = (args) => {
    const [, { id }] = args.queryKey;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    }).catch((error) => {
        throw error
    });
};

export const getGenres = async () =>
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + TMDB_KEY + "&language=en-US")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        }).catch((error) => {
            throw error
        });

export const getMovieImages = ({ queryKey }) => {
    const [, { id }] = queryKey;
    return fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${TMDB_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        }).catch((error) => {
            throw error
        });
};

export const getMovieReviews = (id) =>
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${TMDB_KEY}`)
        .then((res) => res.json())
        .then((json) => json.results);

export const getUpcomingMovies = (page) =>
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        }).catch((error) => {
            throw error;
        });

export const getRecommendedMovies = (id) =>
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${TMDB_KEY}`)
        .then((res) => res.json())
        .then((json) => json.results);

export const getSimilarMovies = (id) =>
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${TMDB_KEY}`)
        .then((res) => res.json())
        .then((json) => json.results);

export const getMovieCast = (id) =>
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_KEY}`)
        .then((res) => res.json())
        .then((json) => json.cast);

export const getPopularArtists = (page) =>
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${TMDB_KEY}&language=en-US&page=${page}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        }).catch((error) => {
            throw error
        });