import React from 'react';
import 'tachyons';
import '../Card.css'


const Card = ({id,name,email}) => {
 //const {id,name,email}=props
  return  (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='cricket' src={`./images/${id}.png`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;