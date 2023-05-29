import { Container, Card, Row, Text } from "@nextui-org/react";

export default function Contact() {
  return (
    <Container fluid>
      <Card >
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15}css={{ m: 0 }}>
            CONTACT.
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}