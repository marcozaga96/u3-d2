import books from "../fantasy.json";
import SingleBook from "./SingleBook";
import { Col, Row, Container } from "react-bootstrap";

const BookList = function () {
  return (
    <Container className="bg-secondary text-white mt-5 p-4 text-center">
      <Row>
        {books.map((book) => {
          return (
            <Col xs={12} md={6} lg={4} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default BookList;
