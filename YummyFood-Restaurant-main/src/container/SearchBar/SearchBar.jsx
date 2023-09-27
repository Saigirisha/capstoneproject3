import React, { useState } from 'react';

import { foods, filterItems } from '../../data.js';
import MenuItems from '../MenuItems/MenuItems.jsx';
import './SearchBar.css';
   



const SearchBar = ({ FavoratesList, addToHearted, hearts, index }) => {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  return (
    <div className='container'>
      <div className='search'>
        <input
          type='search'
          className='search__input'
          placeholder='Search Plat ...'
          value={ query }
          onChange={ e => setQuery(e.target.value) }
        />
      </div>
      <MenuItems 
        FavoratesList={ FavoratesList } 
        items={ results }
        addToHearted={ addToHearted }
        hearts={ hearts }
      />
    </div>
  )
}

export default SearchBar;