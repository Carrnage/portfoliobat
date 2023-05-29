import { Container, Card, Row, Text, Spacer, Col, Image} from "@nextui-org/react";

export default function Layout() {
  return (
    <Container lg >
      <Spacer x={3}/>
      <Card >
        <Card.Header>
          <Row justify="center" align="center">
            <Text h6 size={15}css={{ m: 0 }}>
              About Me
            </Text>
          </Row>
        </Card.Header>
        <Card.Divider />
        <Card.Body >
          <Row>
          <Col span={3}>
          <Image  objectFit="scale-down" width={400} src="https://i.imgur.com/FJkrhob.jpg"/>
          </Col>
          <Spacer x={3} />
          <Col>
          <Text>Hello! my name is Quintin Carr</Text>
          <Text>I am currently a student at the Southern Institute of Technology*</Text>
          <Text size={8}>*a business division of te pūkenga</Text>
          </Col>
          </Row>
        </Card.Body>
      </Card>
      <Spacer x={3}/>
    </Container>
  );
}