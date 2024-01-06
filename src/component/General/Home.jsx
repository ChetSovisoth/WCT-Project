import Carousel from "react-bootstrap/Carousel";
import { Container, Col } from "react-bootstrap";
import p1 from '../../assets/pic/p1.jpg'
import p2 from '../../assets/pic/p2.jpg'
import p3 from '../../assets/pic/p3.jpg'
import "../../assets/main.css";
const Home = () => {
  const carouselData = [
    {
      id: 1,
      src: p1,
      title: "Stunning Waterfall",
      detail: "A majestic waterfall cascading down a rocky cliff face.",
    },
    {
      id: 2,
      src: p2,
      title: "Tranquil Beach",
      detail: "Palm trees swaying gently on a secluded beach.",
    },
    {
      id: 3,
      src: p3,
      title: "Vibrant Cityscape",
      detail: "A bustling cityscape lit up by neon lights.",
    },
  ];
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Col>
          <section>
              <div className="text-center">
                <div className="display-1 font-weight-bold pt-5 pb-1 lh-base">
                  <h1>Our Recommendation</h1>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-4 mt-4">
                <div className="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div className="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div className="col-content">
                      <img src={p2} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div className="col-content">
                      <img src={p3} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div className="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div className="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div className="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div className="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div className="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section>
              <div className="text-center display-1 font-weight-bold pt-5 pb-1 lh-base ">
                <h1>New Lastest</h1>
                <Carousel>
                  {carouselData.map((item) => (
                    <Carousel.Item key={item.id}>
                      <div className="col-content w-100">
                        <img
                          className="d-block w-100"
                          src={item.src}
                          alt={item.alt}
                        />
                        <Carousel.Caption>
                          <h3>{item.title}</h3>
                          <p>{item.detail}</p>
                        </Carousel.Caption>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </section>
          </Col>
        </Container>
      </header>
    </div>
  );
};

export default Home;
