import React from 'react';
import Card from './Card';

const CardList = ({Cricketers}) =>
{
    // const cardcomponent=Cricketers.map((user,i) => {
    // return <Card key={i} id={user.id} name={user.name} email={user.email} />
    // });
    return(
       <div>
        {
            Cricketers.map((user,i) => {
                return <Card key={i} id={user.id} name={user.name} email={user.email} />
                })
        }
       </div>
        // <div> {cardcomponent} </div>
     
    );
}

export default CardList;