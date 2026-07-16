import style from "@/app/page.module.css";
import type { MovieData } from "@/app/types/movie";
import Link from "next/link";
import Image from "next/image";

type Props = {
  movie: MovieData;
};

const MovieDetail = ({ movie }: Props) => {
  return (
    <div className={style.detailSection}>
      <Link href={"/"} className={style.backText}>
        ← Back
      </Link>
      <div className={style.detailContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title}`}
          width={400}
          height={600}
        />
        <div>
          <div className={style.movieDetailContainer}>
            <div className={style.detailTitle}>{movie.title}</div>
            <div className={style.detaildate}>
              <p>Released: {movie.release_date}</p>
              <p>
                <span className={style.popularNum}>☆{movie.vote_average}</span>
                <span className={style.popularText}>/10</span>
              </p>
            </div>
            <div className={style.synopsisContainer}>
              <p className={style.synopsisTitle}>SYNOPSIS</p>
              <p className={style.synopsisText}>{movie.overview}</p>
            </div>
            <button className={style.btnDesign}>WATCH TRAILER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
