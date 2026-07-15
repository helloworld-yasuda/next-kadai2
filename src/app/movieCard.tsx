"use client";
import type { movieData } from "@/app/types/movie";
import style from "./page.module.css";
import Link from "next/link";

type Props = {
  movie: movieData;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <Link href={`/movies/${movie.id}`} className={style.cardContainer}>
      <img
        className={style.imageStyle}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie.title"
      />
      <div className={style.cardDetail}>
        <div className={style.cardTitle}>{movie.title}</div>
        <div className={style.infoContainer}>
          <div className={style.cardInfo}>{movie.release_date}</div>
          <div className={style.Voteaverage}>☆{movie.vote_average}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
