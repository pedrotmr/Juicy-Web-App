import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from 'react-icons/fa';

const SpiritsGrid = props => {
  return (
    <>
      <div className='spirits__header'>
        <h1>{props.title}</h1>
        <FaAngleDoubleDown className='spirits__header__arrow' />
      </div>

      <div className='spirits__grid'>
        {props.list.map(drink => {
          return (
            <Link to={drink.idDrink} id={drink.idDrink} className='link'>
              <div className='spirits__grid__cards' key={drink.idDrink}>
                <img src={drink.strDrinkThumb} alt='hero_img' />
                <h2>{drink.strDrink}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SpiritsGrid;
