import React, { Component } from 'react'
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox'
import ResultsContainer from './ResultsContainer'


const name = require("@rstacruz/startup-name-generator");

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            headerText : "Name It!",
            headerExpanded : true,
            suggestedNames: []
        };
    }
    handleChange = (inputText) => {
        this.setState({
            headerExpanded : !inputText,
            suggestedNames : inputText ? name(inputText): []
        })
    }

    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} message={this.state.headerText} />
                <SearchBox change={this.handleChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App