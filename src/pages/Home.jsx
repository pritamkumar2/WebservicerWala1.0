import react from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <main>
        <section>
          <div className="container">
            <div>
              <p>my company is the best it company</p>
              <h1>welcome to pritam devloper wala</h1>
              <p>
                are you ready to take your business to sky with cutting-edge it
                solution ! at pritam devloper wala we specialze in providing in
                innivation it services to meet your unique needs.
              </p>
            </div>
            {/* swip section */}
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" id="photo1"></div>
                <div class="swiper-slide" id="photo2"></div>
                <div class="swiper-slide" id="photo3"></div>
                <div class="swiper-slide" id="photo4"></div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div>
            {/* //////////////////////// */}
              <img
                src="./images/home.png"
                alt="home image"
                height="500"
                width="500"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div>
              <img src="./images/design.png" height="500" width="500" />
            </div>
            <div>
              <p>we are here to help you </p>
              <h2>Get Started Today</h2>
              <p>
                ready to take the first step towards a morw effcient and secure
                IT infarastructure? contact us today for free consultation and
                lets discuss how pritam devloper wala can help your business
              </p>
              <button type="button">
                <NavLink to="/contact">Contact</NavLink>
              </button>
              <button type="button">learn more</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
