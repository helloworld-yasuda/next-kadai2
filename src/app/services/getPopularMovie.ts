const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API;
import type { MovieData } from "@/app/types/movie";

const getPopularMovie = async (): Promise<MovieData[]> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ja-JP`,
  );
  if (!response.ok) {
    throw new Error("情報の取得に失敗しました");
  }
  const data = await response.json();
  return data.results;
};

export default getPopularMovie;
