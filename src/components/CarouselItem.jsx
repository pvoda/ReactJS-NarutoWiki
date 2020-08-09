import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';
import plusIcon from '../assets/images/plus-icon.png';


const CarouselItem = ({name, aldea, habilidad, clan, source, image}) => (
<div className="carousel-item">
        <img className="carousel-item__img" src={image} alt={name}/>
        <div className="carousel-item__details">
          <div>
          <a title="Ver Más" href={source} target="_blank"> <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/> </a>
          </div>
          <p className="carousel-item__details--title">{name}</p>
          <p className="carousel-item__details--subtitle">
          {`Aldea: ${aldea} | Kekkei Genkai: ${habilidad} | Clan: ${clan}`}
          </p>
        </div>
</div>
);

CarouselItem.propTypes = {
  name: PropTypes.string,
  aldea: PropTypes.string,
  habilidad: PropTypes.string,
  clan: PropTypes.string,

}


export default CarouselItem;