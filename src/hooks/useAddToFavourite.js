import { useMutation } from "react-query";
import { supabase } from "../api/supabaseClient";

const getUser = async () => {
    const { data: { session: { user } }, } = await supabase.auth.getSession()
    return user;
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

export default function useAddToFavourites(movie) {
    return useMutation(() => addToFavourites(movie))
}