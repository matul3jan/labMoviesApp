import { useQuery, useMutation } from 'react-query'
import { getUser } from '../api/authApiFactory';
import { fetcher } from '../util';

const fetchFavourites = async () => {
    const user = getUser();
    const response = await fetcher(`/api/accounts/${user.id}/favourites`);
    if (!response.ok) {
        throw new Error('Error fetching favourites');
    }
    return await response.json();
}

const addToFavourites = async (movie) => {
    const user = getUser();
    const response = await fetcher(`api/accounts/${user.id}/favourites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieId: movie.id })
    });
    if (!response.ok) {
        throw new Error('Error adding to favourite');
    }
    return await response.json();
}

const removeFromFavourites = async (movie) => {
    const user = getUser();
    const response = await fetcher(`/api/accounts/${user.id}/favourites`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieId: movie.id })
    });
    if (!response.ok) {
        throw new Error('Error adding to favourite');
    }
    return await response.json();
};

export function useFavourites() {
    return useQuery('favourites', () => fetchFavourites())
}

export function useAddToFavourites(movie) {
    return useMutation(() => addToFavourites(movie))
}

export function useRemoveFromFavourites(movie) {
    return useMutation(() => removeFromFavourites(movie))
}