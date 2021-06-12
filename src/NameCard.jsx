import React from 'react';
import './NameCard.css';

const namecheap= 'https://www.namecheap.com/domains/registration/results/?domain=';
const  NameCard = ({name}) => {
    return (
        <div className="namecard">
            <a className="cardLink" href={`${namecheap}${name}`}>
                <p className="name">{name}</p>
            </a>
            
        </div>
    )
}

export default NameCard 
