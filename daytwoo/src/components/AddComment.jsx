import { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Button,
} from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   newComment: {
  //     comment: "",
  //     rate: "",
  //     elementId: this.props.asin,
  //   },
  // };
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "",
    elementId: props.asin,
  });
  const inviaCommento = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjNmQ5YWZkZWUzZDAwMTU5YmRlZWMiLCJpYXQiOjE3MjQ2NzM0MzQsImV4cCI6MTcyNTg4MzAzNH0.oLgXfqEd6PJ4Qx1OxXK4O-Vf0NwJLqVRP-LnLugz-HQ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.ok) {
          console.log("commento salvato");
          alert("grazie!");

          // this.setState({
          //   newComment: {
          //     comment: "",
          //     rate: "",
          //     elementId: this.props.asin,
          //   },
          // });
          setNewComment({
            comment: "",
            rate: "",
            elementId: props.asin,
          });
        } else {
          alert("riprova più tardi");
          throw new Error("errore!");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={inviaCommento}>
            <FormGroup>
              <FormLabel>commento</FormLabel>
              <FormControl
                type="text"
                placeholder="inserisci un commento"
                required
                onChange={(e) => {
                  // this.setState({
                  //   newComment: {
                  //     ...this.state.newComment,
                  //     comment: e.target.value,
                  //   },
                  // });
                  setNewComment({
                    newComment,
                    comment: e.target.value,
                  });
                }}
                value={newComment.comment}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>voto</FormLabel>
              <Form.Select
                required
                onChange={(e) => {
                  // this.setState({
                  //   newComment: {
                  //     ...this.state.newComment,
                  //     rate: e.target.value,
                  //   },
                  // });
                  setNewComment({
                    newComment,
                    rate: e.target.value,
                  });
                }}
                value={newComment.rate}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </FormGroup>
            <Button variant="success" type="submit">
              Invia!
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddComment;
