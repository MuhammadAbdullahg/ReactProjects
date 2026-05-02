import { useState, useEffect, useRef } from "react";
import MovieList from "../component/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const inputRef = useRef("");

  const fetchMovies = async (query) => {
    const res = await fetch(
      `http://www.omdbapi.com/?&apikey=86827f3d&s=${query}`,
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.Search || []);
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      fetchMovies(query);
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          placeholder="Search for a movie..."
          ref={inputRef}
        />
        <button type="submit">Search 🔎</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
