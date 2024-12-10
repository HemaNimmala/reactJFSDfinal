import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase custom-bg-text">
                    IndiQuest
                  </h5>

                  <p>
                    Welcome to our Indian Culture management system website, where every
                    detail meets perfection. Let's turn your vision into an
                    unforgettable experience!
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="https://en.wikipedia.org/wiki/Culture_of_India" class="text-color">
                        Wikipedia
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.co.in/books/edition/Being_Different_An_Different_Challenge_T/AxFUnwEACAAJ?hl=en" class="text-color">
                        Best Book
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        9898989898
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/hema-nimmala-05a98b28a/" class="text-color">
                        Linkedin Profile
                      </a>
                    </li>
                    <li>
                      <p>2200030832@kluniversity.in</p>
                      
                    </li>
                  </ul>
                </div>

                {/* <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Careers</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div> */}

                {/* <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Links</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </section>

            <hr class="mb-4" />

            {/* <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 custom-bg-text">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section> */}

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2024 Copyright:
            <a class="text-color-3" href="#">
              indiquest.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
