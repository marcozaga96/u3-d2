import { Component } from "react";
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

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  inviaCommento = (e) => {
    e.preventDefault();

    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWYzNWYyNjBjYzAwMTVjYzBkZTciLCJpYXQiOjE3MjQzMzQ3NTYsImV4cCI6MTcyNTU0NDM1Nn0.K6fNpHmwS0kFm9sJOjAda1IsADcSeinBVKKuaJAE_oc",
        },
        body: JSON.stringify(this.state.newComment),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("commento salvato");
          alert("grazie!");

          this.setState({
            newComment: {
              comment: "",
              rate: "",
              elementId: "",
            },
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

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <FormLabel>commento</FormLabel>
                <FormControl
                  type="text"
                  placeholder="inserisci un commento"
                  required
                  onChange={(e) => {
                    this.setState({
                      newComment: {
                        ...this.state.newComment,
                        comment: e.target.value,
                      },
                    });
                  }}
                  value={this.state.newComment.comment}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>voto</FormLabel>
                <Form.Select
                  required
                  onChange={(e) => {
                    this.setState({
                      newComment: {
                        ...this.state.newComment,
                        comment: e.target.value,
                      },
                    });
                  }}
                  value={this.state.newComment.comment}
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
  }
}
export default AddComment;
