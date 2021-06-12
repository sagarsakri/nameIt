import React, {useState} from 'react'
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox'
import ResultsContainer from './ResultsContainer'


const name = require("@rstacruz/startup-name-generator");

const App = () =>{
    const [headerText,setHeaderText] = useState('Name It!');
    const [headerExpanded , setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);
    const handleChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
    };

    return (
        <div>
            <Header headerExpanded={headerExpanded} message={headerText} />
            <SearchBox change={handleChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    )
}

export default App