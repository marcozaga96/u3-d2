import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

// const SingleBook = function (props) {
//   return (
//     <Card style={{ width: "18rem", height: "30rem" }} className="my-3">
//       <Card.Img
//         variant="top"
//         src={props.book.img}
//         style={{ height: "18rem" }}
//       />
//       <Card.Body>
//         <Card.Title>{props.book.title}</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// };
// export default SingleBook;
class SingleBook extends Component {
  render() {
    const { book, isSelected, onSelect } = this.props;
    return (
      <Card
        onClick={() => onSelect(book.asin)}
        style={{
          width: "18rem",
          height: "30rem",
          border: isSelected ? "2px solid red" : "1px solid gray",
        }}
        className="my-3"
      >
        <Card.Img variant="top" src={book.img} style={{ height: "18rem" }} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
