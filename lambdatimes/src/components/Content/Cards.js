import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = (props) => {
  
  return (
    <div className="cards-container">
      {props.cards.map((card, idx) => {
       return <Card cards={card} key={idx}/>
      })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }) 
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;