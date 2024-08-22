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
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            width: "18rem",
            height: "30rem",
            border: this.state.selected ? "2px solid red" : "1px solid gray",
          }}
          className="my-3"
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ height: "18rem" }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </>
    );
  }
}
export default SingleBook;
