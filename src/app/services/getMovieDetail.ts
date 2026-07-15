const API_KEY = process.env.MOVIE_API;

const getMovieDetail = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ja-JP`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("情報の取得に失敗しました");
  }

  return await response.json();
};

export default getMovieDetail;
