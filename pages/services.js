import { Row, Col } from 'reactstrap';


const Services = () => 

<div title="Anjana - Learn More About Me">
    <div className="about-page">
    <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Anjana and I am an experienced software engineer and freelance developer. </p>
                <p>
                I have a Master's degree in Artificial Intelligence and several years of experience working
                on a wide range of technologies and projects from C++ development for ultrasound devices to
                 modern mobile and web applications in React and Angular.
                </p>
                <p>
                Throughout my career, I have acquired advanced technical knowledge and the ability to explain
                programming topics clearly and in detail to a broad audience. I invite you to take my course,
                where I have put a lot of effort to explain web and software engineering concepts in a detailed,
                hands-on and understandable way.
                </p>
              </div>
            </Col>
          </Row>
    </div>
</div>

export default Services