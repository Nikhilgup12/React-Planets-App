// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachCarousel} = props
  const {description, name, imageUrl} = eachCarousel
  return (
    <div className="carousel-list-container" data-testid="planets">
      <img src={imageUrl} className="carousel-image" alt={`planet ${name}`} />
      <h1 className="carousel-list-heading"> {name} </h1>
      <p className="carousel-description"> {description} </p>
    </div>
  )
}

export default PlanetItem
