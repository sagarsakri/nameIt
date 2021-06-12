import React from 'react';
import NameCard from './NameCard';
import './ResultsContainer.css';
 const  ResultsContainer= ({suggestedNames}) => {
    const suggestNamesList = suggestedNames.map( name => <NameCard key={name} name={name} />  );
    return <div className="results-container" >{suggestNamesList}</div>
};
export default ResultsContainer