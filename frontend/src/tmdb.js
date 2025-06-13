const API_KEY = "2ad2df9b1a98008eabe5c2ebce4d4630";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();
  return data.results;
};
