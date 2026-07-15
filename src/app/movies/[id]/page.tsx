import getMovieDetail from "@/app/services/getMovieDetail";
import MovieDetail from "./MovieDetail";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const DetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const movie = await getMovieDetail(id);

  return <MovieDetail movie={movie} />;
};

export default DetailPage;
