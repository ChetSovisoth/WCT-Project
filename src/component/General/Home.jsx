import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Col } from "react-bootstrap";
import videoBG from "../../assets/pic/bgvid.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from "../../assets/pic/p1.jpg";
import p2 from "../../assets/pic/p2.jpg";
import p3 from "../../assets/pic/p3.jpg";
import { SearchBar } from "../Search/SearchBar.jsx";
import { SearchResultsList } from "../Search/SearchResultList.jsx";
import { useState } from "react";
const Home = () => {
  const [results, setResults] = useState([]);
  const carouselData = [
    {
      src: p1,
      title: "Stunning Waterfall",
      detail: "A majestic waterfall cascading down a rocky cliff face.",
    },
    {
      src: p1,
      title: "Tranquil Beach",
      detail: "Palm trees swaying gently on a secluded beach.",
    },
    {
      src: p1,

      title: "Vibrant Cityscape",
      detail: "A bustling cityscape lit up by neon lights.",
    },
  ];
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Col>
            <div className="banner">
              <video src={videoBG} type="video/mp4" autoPlay muted loop />
              <div className="title">
                <h1>TRAVEL AROUND CAMBODIA</h1>
                <p>
                  Plan your trip and travel around the world with the most
                  affordable places
                </p>
                <p>What season you excite the most?</p>
                <div className="d-flex justify-content-center">
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown link
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown link
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-start pl-4 mt-5 d-flex ">
                  <p className="place link-offset-3 ">Popular Places:</p>
                  <a href="./register.html" className="button">
                    Seam Reab
                  </a>
                  <a href="./register.html" className="button">
                    Phnom Penh
                  </a>
                  <a href="./register.html" className="button">
                    Kompong Soum
                  </a>
                  <a href="./register.html" className="button">
                    Takoe
                  </a>
                </div>
                <div className="d-flex mt-3">
                  <div className="search">
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && (
                      <SearchResultsList results={results} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <section>
              <div className="d-flex mt-5 ">
                <div className="d-flex flex-wrap p-2 m-2">
                  <div className="column">
                    <img src="https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=375&w=630>" />
                    <img src="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>

                  <div className="centeral">
                    <img src="https://images.pexels.com/photos/3629537/pexels-photo-3629537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                  </div>

                  <div className="text-center ml-4">
                    <div className="choose">
                      <h1>Why choose us!</h1>
                      <ol class="alternating">
                        <li>
                          <strong>Highlighted Attraction</strong>
                          <p>
                            Fight aliens, wear a head crab, learn about gravity
                          </p>
                        </li>
                        <li>
                          <strong>Lastest Attraction creation</strong>
                          <p>
                            Fight aliens, wear an AI, learn about screen peeking
                            siblings
                          </p>
                        </li>
                        <li>
                          <strong>Team Forts 2</strong>
                          <p>
                            Fight non-alien residents, wear hats, learn about
                            teamwork
                          </p>
                        </li>
                        <li>
                          <strong>Tribes</strong>
                          <p>Ski, slip, and slide your way to victory</p>
                        </li>
                        <li>
                          <strong>Lastest Attraction creation</strong>
                          <p>
                            Fight aliens, wear an AI, learn about screen peeking
                            siblings
                          </p>
                        </li>
                        <li>
                          <strong>Lastest Attraction creation</strong>
                          <p>
                            Fight aliens, wear an AI, learn about screen peeking
                            siblings
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="text-center">
                <div className="display-1 font-weight-bold pt-5 pb-1 lh-base">
                  <h1>Our Recommendation</h1>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-4 mt-4">
                <div class="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div class="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div class="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div class="col-content">
                      <img src={p2} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div class="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div class="col-content">
                      <img src={p3} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div class="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div class="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div class="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div class="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div class="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div class="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div class="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div class="col-content">
                      <img src={p1} alt="" />
                      <h5>India</h5>
                      <p>Kashmir</p>
                    </div>
                  </a>
                </div>
                <div class="d-flex justify-content-around flex-wrap">
                  <a href="./locations.html#kashmir" target="_blank">
                    <div class="col-content">
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
                    <Carousel.Item key={item.src}>
                      <div className="col-content">
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
