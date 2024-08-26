import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import { Col, Row } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    comments: [],
    selected: false,
  };
  changeState = (selected) => {
    this.setState({
      selected: (selected = true),
    });
  };
  render() {
    return (
      <>
        <header>
          <MyNav />
        </header>
        <main className="bg-secondary">
          <Row>
            <Welcome />
            <Col>
              <BookList
                comments={this.state.comments}
                selected={this.state.selected}
                changeState={this.changeState}
              />
            </Col>
            <Col md={3}>
              <CommentArea
                comments={this.state.comments}
                selected={this.state.selected}
                changeState={this.changeState}
              />
            </Col>
            {/* <AllTheBooks /> */}
          </Row>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </>
    );
  }
}

export default App;
