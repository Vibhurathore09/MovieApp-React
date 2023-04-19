import Header from "./Components/Header";
import Movies from "./Components/Movies";
import "./app.css";
import movies from "./movie.json";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((movie) => {
          return (
            <Movies title={movie.Title} year={movie.Year} img={movie.Poster} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
