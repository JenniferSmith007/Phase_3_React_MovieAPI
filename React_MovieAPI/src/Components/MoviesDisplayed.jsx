

 const MoviesDisplayed = (props) => {
   const {data} = props
    return (
        <div>
          <p>Title: {data.Title}</p>
            <img src={data.Poster} alt='' />
         
        </div>
    );
};

export default MoviesDisplayed;