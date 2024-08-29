import { useState } from "react";
import books from "../fantasy.json";
import SingleBook from "./SingleBook";
import { Col, Row, Container, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";

// const BookList = function () {
//   return (
//     <Container className="bg-secondary text-white mt-5 p-4 text-center">
//       <Row>
//         {books.map((book) => {
//           return (
//             <Col xs={12} md={6} lg={4} key={book.asin}>
//               <SingleBook book={book} />
//             </Col>
//           );
//         })}
//       </Row>
//     </Container>
//   );
// };
const BookList = () => {
  // state = {
  //   searchValue: "",
  //   selectedAsin: null,
  // };
  const [searchValue, setSearchValue] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const handleBookSelect = (asin) => {
    setSelectedAsin({ selectedAsin: asin });
  };

  return (
    <Container className="bg-secondary text-white mt-5 p-4 text-center">
      <Row className="my-5">
        <Col>
          <Form.Control
            type="text"
            placeholder="cerca"
            value={searchValue}
            onChange={(e) => {
              // this.setState({
              //   searchValue: e.target.value,
              // });
              setSearchValue({
                searchValue: e.target.value,
              });
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Row>
            {books
              .filter((book) =>
                book.title
                  .toLocaleLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((book) => {
                return (
                  <Col xs={12} md={6} lg={4} key={book.asin}>
                    <SingleBook
                      book={book}
                      isSelected={selectedAsin === book.asin}
                      onSelect={() => handleBookSelect(book.asin)}
                    />
                  </Col>
                );
              })}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          {selectedAsin ? (
            <CommentArea asin={selectedAsin} />
          ) : (
            <div>Seleziona un libro per vedere i commenti</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
