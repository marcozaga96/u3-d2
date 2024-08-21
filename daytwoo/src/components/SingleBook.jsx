import { Card } from "react-bootstrap";

const SingleBook = function (props) {
  return (
    <Card style={{ width: "18rem", height: "30rem" }} className="my-3">
      <Card.Img
        variant="top"
        src={props.book.img}
        style={{ height: "18rem" }}
      />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
