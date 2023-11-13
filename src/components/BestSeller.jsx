import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard'; 
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
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

const BestSeller = () => {
  const [categoryId, setCategoryId] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://49.161.110.41:8080/api/popular?categoryId=${categoryId}`
      );
      setSearchResult(response.data.item);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [categoryId]);

  return (
    <>
    <NavigationBar />
    <SearchContainer>
      <h1>베스트 셀러</h1>
      <div>
        <Form.Select aria-label="Default select example" value={categoryId} onChange={(e) => {setCategoryId(e.target.value); }}
      >
            <option>카테고리를 선택해 주세요</option>
            <option value="100">국내도서</option>
            <option value="101">소설</option>
            <option value="102">시/에세이</option>
            <option value="103">예술/대중문화</option>
            <option value="104">사회과학</option>
            <option value="105">역사와 문화</option>
            <option value="107">잡지</option>
            <option value="108">만화</option>
            <option value="109">유아</option>
            <option value="110">아동</option>
            <option value="111">가정과 생활</option>
            <option value="112">청소년</option>
            <option value="113">초등학습서</option>
            <option value="114">고등학습서</option>
            <option value="115">국어/외국어/사전</option>
            <option value="116">자연과 과학</option>
            <option value="117">경제경영</option>
            <option value="118">자기계발</option>
            <option value="119">인문</option>
            <option value="120">종교/역학</option>
            <option value="122">컴퓨터/인터넷</option>
            <option value="123">자격서/수험서</option>
        </Form.Select>
      </div>
      <div>
        <p></p>
        <SearchCardContainer>
          {searchResult.map((item) => (
            <BookCard key={item.itemId} item={item} />
          ))}
        </SearchCardContainer>
      </div>
    </SearchContainer>
    </>
  );
};

export default BestSeller;