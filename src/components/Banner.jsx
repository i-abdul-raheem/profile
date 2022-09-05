import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";

export default function Banner() {
  return (
    <Container>
      <div>
        <Typewriter
          options={{
            strings: ["Mongo DB", "Express.JS", "React.JS", "Node.JS"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="myPic">
        <img src="./assets/img/mypic.png" alt="Abdul Raheem" />
      </div>
    </Container>
  );
}
