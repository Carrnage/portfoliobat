import { Container, Card, Row, Text, } from "@nextui-org/react";
import React, {useEffect} from "react";
import { UserCard } from "react-ui-cards";

export default function Home() {
  useEffect(() => {
    document.title = 'Portfolio - My work'
  })
  return (
    <Container lg>
      <Card >
        <Card.Header>
          <Row justify="center" align="center">
            <Text h6 size={15}css={{ m: 0 }}>
              My Work.
            </Text>
          </Row>
        </Card.Header>
        <Card.Divider />
        <Card.Body >
            <Text >
                I am starting to host my work on Github while it is currently sparse I intend to add more to it over time
                <br/>
                <UserCard href='https://github.com/Carrnage?tab=repositories' name='Quintin Carr' positionName='Bachelor Information Technologies' avatar="https://avatars.githubusercontent.com/u/44126959?s=400&v=4" header='https://www.southlandexpress.co.nz/wp-content/uploads/2022/10/SIT-BUILDING-4-040319-scaled.jpg'/>
                <br/>
                Note that some repositories are simply local clones of other people's work for research please refer to GitHub's guide on how track committs
            </Text>
        </Card.Body>
      </Card>
    </Container>
  );
}