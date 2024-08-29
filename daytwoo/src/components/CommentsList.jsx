// import { Component } from "react";
import { ListGroup } from "react-bootstrap";

const CommentsList = (props) => {
  if (!Array.isArray(props.comments)) {
    console.error("props.comments non è un array:", props.comments);
    return null;
  }
  const comments = props.comments || [];
  return (
    <>
      {comments.map((comment) => {
        return (
          <ListGroup.Item key={comment.asin}>
            <p className="text-muted fs-6 display-6">
              {comment.author}
              <br />
              {comment.comment},{comment.rate}⭐
            </p>
          </ListGroup.Item>
        );
      })}
    </>
  );
};

export default CommentsList;
