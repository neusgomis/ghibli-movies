const Films = ({ films }) => {

  return (
    <div className="d-flex flex-wrap justify-content-between mt-5">
        {films.map(film => (
          <div key={film.id} className=" card m-3" style={{width: "25rem"}}>
            <img src={film.movie_banner} className="card-img-top" alt="movie banner"></img>
              <h4 className="card-header">{film.title}</h4>
              <ul class="list-group list-group-flush">
                <p className="list-group-item m-0">Director: {film.director}</p>
                <p className="list-group-item m-0">Year: {film.release_date}</p>
                <p className="list-group-item m-0">{film.description}</p>
                <div className="list-group-item m-0">
                  <p className={film.rt_score > 60 ? 'greenScore' : 'redScore' }>Rotten Tomatoes Score: {film.rt_score}</p>
                </div>
              </ul>
          </div>
      ))}
    </div>
  )
}

export default Films;
