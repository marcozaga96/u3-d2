import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWYzNWYyNjBjYzAwMTVjYzBkZTciLCJpYXQiOjE3MjQzMzQ3NTYsImV4cCI6MTcyNTU0NDM1Nn0.K6fNpHmwS0kFm9sJOjAda1IsADcSeinBVKKuaJAE_oc",
        },
      }
    )
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
        this.setState({
          comments: arrayOfComments,
        });
        console.log("State", this.state.comments);
      })
      .catch((error) => {
        console.log("ERRORE!", error);
      });
  };

  render() {
    return (
      <ListGroup>
        <CommentsList comments={this.state.comments} />
        <AddComment />
      </ListGroup>
    );
  }
}
export default CommentArea;
