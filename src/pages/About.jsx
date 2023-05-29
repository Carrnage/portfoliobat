import { Container, Card, Row, Text, } from "@nextui-org/react";

export default function Layout() {
  return (
    <Container fluid>
      <Card >
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15}css={{ m: 0 }}>
              ABOUT.
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}