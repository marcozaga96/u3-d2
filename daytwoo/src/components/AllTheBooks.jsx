import {Container,Row, Col, Card } from "react-bootstrap";
import books from "../fantasy.json"
const AllTheBooks=function () {
    return (
        
        <Container className="bg-secondary text-white mt-5 p-4 text-center" >
         <Row >
          <Col xs={12} md={3}>
           {books.map((book)=>{
            return (<Card key={book.asin} style={{ width: '18rem' }} className="my-3" >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    {book.category}
                  </Card.Text>
                  <Card.Text>
                    {book.price}€
                  </Card.Text>
                </Card.Body>
              </Card>
              )
        })}
        </Col>
     </Row>
    </Container>
      )
}

export default AllTheBooks