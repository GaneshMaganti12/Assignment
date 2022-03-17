import "./Cards.css"

function Cards(props){
  const {gameDetails} = props
  const {imageUrl, name, description} = gameDetails
    return(
      <li className="list-items">
        <div className="card card-style">
        <img src={imageUrl} className="card-img-top" alt="card"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="/#" className="btn btn-primary">Download Now</a>
        </div>
      </div>
      </li>
    )
}

export default Cards