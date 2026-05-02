import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail() {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?&apikey=86827f3d&i=${id}`,
      );
      const data = await res.json();
      setMovie(data);
      console.log(data);
    }
    getMovie();
  }, [id]);

  if (!movie) {
    return <p>loading...</p>;
  }
  
  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img alt={movie.Title} src={movie.Poster} />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Released:</strong> {movie.Released}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
    </div>
  );
}

export default MovieDetail;
