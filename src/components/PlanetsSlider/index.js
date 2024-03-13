// Write your code here
import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  // const setting = {
  //   // dots: true,
  //   // infinite: true,
  //   // speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // }

  return (
    <div className="carousel-container">
      <div className="slider-container" data-testid="planets">
        <h1 className="carousel-heading"> PLANETS </h1>
        <Slider>
          {planetsList.map(each => (
            <PlanetItem eachCarousel={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
