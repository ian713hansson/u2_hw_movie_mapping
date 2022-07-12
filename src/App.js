import './styles/App.css'
import movies from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {

  return (
    <div className="App">
      <h1>Making Moves</h1>
      {movies.map((movie) => (
        <div>
          <Movie 
            key={movie.title}
            title={movie.title}
            poster={movie.poster_path}
            date={movie.release_date}
            plot={movie.overview}/>
          <h2>Genre: </h2>
          {movie.genres.map((genre) => (
            <Genre 
            genre={genre.name} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
