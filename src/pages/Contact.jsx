import { Container, Card, Row, Text, Textarea, Button, Grid } from "@nextui-org/react";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState ("Name")
    const [email, setEmail] = useState ("Email")
    const [message, setMessage] = useState ("Name")

function onSubmit() {
  console.log(name)
  console.log(email)
  console.log(message)
}
  return (
    <Container lg>
      <Card >
        <Card.Body>
          <Row justify="center" align="center">
            <Text>Name</Text>
          </Row>
          <Row justify="center" align="center">
            <Textarea fullWidth maxRows={1} placeholder={"Please input your name"} onChange={e => setName(e.target.value)}/>
          </Row>
          <Row justify="center" align="center">
            <Text>Email</Text>
          </Row>
          <Row justify="center" align="center">
            <Textarea fullWidth maxRows={1} placeholder={"Example@host.com"} onChange={e => setEmail(e.target.value)}/>
          </Row>
          <Row justify="center" align="center">
            <Text>Message</Text>
          </Row>
          <Row justify="center" align="center">
            <Textarea fullWidth placeholder={"Your message here"} onChange={e => setMessage(e.target.value)}/>
          </Row>
          <Grid>
          <Button auto onPress={onSubmit}>Send</Button>
          </Grid>
        </Card.Body>
      </Card>
    </Container>
  );
}