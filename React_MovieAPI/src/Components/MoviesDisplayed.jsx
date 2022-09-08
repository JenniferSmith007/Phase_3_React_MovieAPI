

 const MoviesDisplayed = (props) => {
   const {data} = props
    return (
        <div>
          
   
         <img src={data.Poster} alt='' />
         <p>Title: {data.Title}</p>
        </div>
    );
};

export default MoviesDisplayed;