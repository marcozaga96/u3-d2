import { Component } from "react";
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
class BookList extends Component {
  state = {
    searchValue: "",
    selectedAsin: null,
  };
  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin });
  };
  render() {
    return (
      <Container className="bg-secondary text-white mt-5 p-4 text-center">
        <Row className="my-5">
          <Col>
            <Form.Control
              type="text"
              placeholder="cerca"
              value={this.state.searchValue}
              onChange={(e) => {
                this.setState({
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
                    .includes(this.state.searchValue.toLowerCase())
                )
                .map((book) => {
                  return (
                    <Col xs={12} md={6} lg={4} key={book.asin}>
                      <SingleBook
                        book={book}
                        onSelect={() => this.handleBookSelect(book.asin)}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            {this.state.selectedAsin ? (
              <CommentArea asin={this.state.selectedAsin} />
            ) : (
              <div>Seleziona un libro per vedere i commenti</div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
