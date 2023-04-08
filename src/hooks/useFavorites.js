import { useQuery } from 'react-query'
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

export default function useFavourites() {
    return useQuery('favourites', () => fetchFavourites())
}