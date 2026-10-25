import React from 'react'

import './SearchBar.css'

function SearchBar() {
  return (
    <>
        <div className="search-bar">
            <span className="search-icon">G</span>
            <input type="text" className="searchbox" placeholder="Search anything" autoComplete="off" />
        </div>
    </>
  )
}

export default SearchBar