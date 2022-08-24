import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../../assets/images/T.png";

export default function About() {
  return (
    <Container>
      <h2 className="title">About Me</h2>
      <Row>
        <Col md={5} lg={4} className="profile-div">
          <img src={myImage} alt="profile" className="profile" />
        </Col>
        <Col md={7} lg={8} className="profile-div">
          <div className="description">
            <p>
              I'm a full stack web developer, confident in working with a MERN
              stack. I also have experience using other frameworks such as
              GraphQl and jQuery, relational databases with MySQL, and of course
              writing in Vanilla JavaScript.
            </p>
            <p>
              I'm currently a finance professional looking to make the career
              switch to tech. I'm currently working as a mortgage adviser and
              have previously worked a multitude of jobs in the finance sector
              from financial adviser to complaint handler.
            </p>

            <p>
              I take great pride in not only being able to complete work to the
              high standard you expect but also go the extra mile wherever
              possible. I enjoy getting to know a business, its goals, and how I
              can best apply myself to make sure your website succeeds. I
              particularly like analysing business metrics and making data-based
              decisions and recommendations, leading to better rates of success.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
