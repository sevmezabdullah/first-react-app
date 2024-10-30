import { useState, useEffect } from "react";



/**
 * Custom hook to fetch data from a given URL.
 * 
 * @param {string} url - The URL from which to fetch data.
 * @returns {object} - An object containing the data, error, and loading state.
 */
function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Veriler gelirken bir hata meydana geldi.')
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }

        }
        fetchData();
    }, [url])

    return { data, loading, error }
}
export default useFetch;