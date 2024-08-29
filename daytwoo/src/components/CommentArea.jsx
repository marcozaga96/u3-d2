import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  // };
  const [comments, setComments] = useState([]);
  // componentDidMount = () => {
  //   this.fetchComments();
  // };

  useEffect(() => {
    console.log("SONO IN COMPONENTDIDMOUNT");
    fetchComments();
  }, [props]);
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.fetchComments();
  //   }
  // };
  const fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWYzNWYyNjBjYzAwMTVjYzBkZTciLCJpYXQiOjE3MjQzMzQ3NTYsImV4cCI6MTcyNTU0NDM1Nn0.K6fNpHmwS0kFm9sJOjAda1IsADcSeinBVKKuaJAE_oc",
      },
    })
      .then((response) => {
        console.log("ciao", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((arrayOfComments) => {
        console.log("COMMENTI RECUPERATE DAL SERVER", arrayOfComments);
        // this.setState({
        //   comments: arrayOfComments,
        // });
        setComments({
          comments: arrayOfComments,
        });
        console.log("State", comments);
      })
      .catch((error) => {
        console.log("ERRORE!", error);
      });
  };

  return (
    <ListGroup>
      <h2>Commenti</h2>
      <CommentsList comments={comments} />
      <AddComment asin={props.asin} />
    </ListGroup>
  );
};

export default CommentArea;
