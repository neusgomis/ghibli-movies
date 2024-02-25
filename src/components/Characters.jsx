const Characters = ({ people }) => {

  return (
    <div className="d-flex justify-content-between flex-wrap">
        {people.map(person => (
          <div key={person.id} className="card m-3" style={{width: "18rem"}}>
              <h4 className="card-header">{person.name}</h4>
              <ul className="list-group list-group-flush">
                <p className="list-group-item m-0"><small className="text-secondary">Age: </small>{person.age}</p>
                <p className="list-group-item m-0"><small className="text-secondary">Gender: </small>{person.gender}</p>
                <p className="list-group-item m-0"><small className="text-secondary">Hair Color: </small>{person.hair_color}</p>
                <p className="list-group-item m-0"><small className="text-secondary">Eye Color: </small> {person.eye_color}</p>
                <a className="list-group-item m-0" href={person.url}>API Resource Link</a>
              </ul>
          </div>
      ))}
      </div>
  )
}

export default Characters;
