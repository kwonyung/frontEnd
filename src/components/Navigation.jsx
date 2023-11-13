import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
    return (
        <Nav className="bg-light p-3 d-flex justify-content-start" style={{ zIndex: 1000 }}>
      <Nav.Link href="/">검색 페이지로</Nav.Link>
      <Nav.Link href="/BestSeller">베스트 셀러</Nav.Link>
      <Nav.Link href="/NewBooks">신간 도서</Nav.Link>
    </Nav>
    );
  };
  export default NavigationBar;