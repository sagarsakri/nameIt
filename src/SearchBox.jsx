import React from 'react'
import './SearchBox.css'
const  SearchBox = (props) => {
    return (
        <div className="search-box">
            <input onChange={ e => props.change(e.target.value)} type="text" placeholder="Type Keywords" className="search-text" />
        </div>
    )
}

export default SearchBox
