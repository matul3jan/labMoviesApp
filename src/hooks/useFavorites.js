import { useQuery, useMutation } from 'react-query'
import { supabase } from "../api/supabaseClient";

const getUser = async () => {
    const session = await supabase.auth.getSession();
    return session?.data?.session?.user;
}

const fetchFavourites = async () => {
    const user = await getUser();
    const { data, error } = await supabase.from('favourites')
        .select()
        .eq('user_id', user?.id)
    if (error) throw new Error(error.message);
    return data;
}

const addToFavourites = async (movie) => {
    const user = await getUser();
    const { data, error } = await supabase.from('favourites')
        .upsert(
            { movie_id: movie?.id, user_id: user?.id },
            { onConflict: 'user_id, movie_id' }
        ).single()
    if (error) throw error;
    return data;
}

const removeFromFavourites = async (movie) => {
    const user = await getUser();
    const { data, error } = await supabase.from("favourites")
        .delete()
        .eq("movie_id", movie?.id)
        .eq("user_id", user?.id)
        .single();
    if (error) throw error;
    return data;
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