import styles from "./page.module.css";
import getPopularMovie from "@/app/services/getPupularMovie";
import MovieCard from "./movieCard";

const Home = async () => {
  const data = await getPopularMovie();
  if (!data) {
    return <div>情報の取得に失敗しました</div>;
  }
  return (
    <div className={styles.layout}>
      <div>
        <div className={styles.headerTitle}>Popular Movies</div>
        <div className={styles.headerText}>Showing 20 films</div>
      </div>
      <div className={styles.movieContainer}>
        {data.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
};
export default Home;
