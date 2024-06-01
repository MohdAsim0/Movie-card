function MovieCart({
  ImageUrl,
  MovieName,
  ReleaseYear,
  Duration,
  Description,
  MadeBy,
  Genres,
}) {
  let type = Genres.join(",");

  return (
    <>
      <div className="movie">
        <div className="about-movie">
          <img src={ImageUrl} alt="" />
          <div className="movie-detail">
            <h4>{MovieName}</h4>
            <p>{ReleaseYear + ", " + MadeBy}</p>

            <div className="movie-type">
              <p className="btn">{Duration + " min"}</p>
              <p>{type}</p>
            </div>
          </div>
        </div>

        <div className="movie-desc">
          <p>{Description}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCart;
