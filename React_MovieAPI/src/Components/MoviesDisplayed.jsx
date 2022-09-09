

 const MoviesDisplayed = (props) => {
   const {data} = props
    return (
        <div>
          <p> {data.Title}</p>
            <img src={data.Poster} alt='' />
            <p>Year: {data.Year}</p>
            <p>ID: {data.imdbID}</p>
            <p>Type: {data.Type}</p>
            <p>plot: {data.Plot}</p>
        </div>
    );
};

export default MoviesDisplayed;