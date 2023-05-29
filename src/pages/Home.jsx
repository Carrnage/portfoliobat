import { Container, Card, Row, Text, Image, Col } from "@nextui-org/react";

export default function Home() {
  return (
    <Container fluid>
      <Card >
        <Card.Image src='https://i.imgur.com/FJkrhob.jpg' objectFit="cover" width="%100" height="%100"/>
      </Card>
    </Container>
  );
}