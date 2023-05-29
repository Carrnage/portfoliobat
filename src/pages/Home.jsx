import { Container, Card, Row, Text, Image, Col } from "@nextui-org/react";
import compu from "../compu.jpeg";

export default function Home() {
  return (
    <Container lg>
      <Row justify="center" align="center">
        <Card autoResize css={{mw: "700px"}}>
          <Card.Header css={{position: "absolute"}}>
            <Text b color={"White"}>Welcome To my Portfolio!</Text>
          </Card.Header >
          <Card.Image src={compu} autoResize objectFit="cover" />
        </Card>
      </Row>
    </Container>
  );
}