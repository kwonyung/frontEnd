import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard'; 
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navigation';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const SearchCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://49.161.110.41:8080/api/search?query=${query}`
      );
      setSearchResult(response.data.item);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <NavigationBar />
    <SearchContainer>
      <h1>도서 검색 페이지</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색어를 입력하세요"
          onKeyPress={handleOnKeyPress}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div>
        <p></p>
        <SearchCardContainer>
          {searchResult.map((item) => (
            <BookCard key={item.itemId} item={item} />
          ))}
        </SearchCardContainer>
      </div>
    </SearchContainer></>
  );
};

export default Search;