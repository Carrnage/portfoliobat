import { Container, Card, Row, Text, } from "@nextui-org/react";

export default function NoPage() {
  return (
    <Container fluid>
      <Card >
        <Card.Body>
          <Row justify="center" align="center">
            <Text>
              404 Invalid Page URL. <br/>
              Please use the navbar to return home
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}