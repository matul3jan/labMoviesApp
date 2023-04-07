import { useMutation } from "react-query";
import { supabase } from "../api/supabaseClient";

const getUser = async () => {
    const { data: { session: { user } }, } = await supabase.auth.getSession()
    return user;
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

export default function useRemoveFromFavourites(movie) {
    return useMutation(() => removeFromFavourites(movie))
}