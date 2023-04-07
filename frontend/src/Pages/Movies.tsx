import { useEffect, useState } from 'react';
//import data from '../MovieData.json';
import { Movie } from '../types/movie';

//const mds = data.MovieData;

function MovieList() {
  // const [ListOMovies] = useState(mds);
  const [ListOMovies, setListOMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchMovie();
  }, []);

  const editedMovies = ListOMovies.filter(
    (movie) => movie.edited === 'Yes',
  ).sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {editedMovies.map((m) => (
              <tr key={m.movieId}>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary">Add Movie</button>
    </>
  );
}

export default MovieList;
