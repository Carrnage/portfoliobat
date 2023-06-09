import { Container, Card, Row, Text, } from "@nextui-org/react";
import compu from "../compu.jpeg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = 'Portfolio - Home'
  })

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