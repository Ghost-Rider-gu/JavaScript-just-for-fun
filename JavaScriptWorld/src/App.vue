<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="./assets/images/logo.png"
                alt="JavaScript World logo"
                class="d-inline-block align-text-top img-fluid"
              />
            </a>
            <div class="collapse navbar-collapse" id="navbarText">
              <span class="navbar-text slogan">
                Knowledge base of <strong>JavaScript</strong> for you
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <button class="btn btn-outline-primary me-2" type="button">
                    Refresh
                  </button>
                </li>
                <li class="nav-item">
                  <button class="btn btn-outline-primary me-2" type="button">
                    Statistics
                  </button>
                </li>
                <li class="nav-item">
                  <button class="btn btn-outline-primary me-2" type="button">
                    About
                  </button>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <TreeView />
      </div>
      <div class="col">
        <div class="card border-light">
          <img src="" class="card-img-top" alt="Article's image" />
          <div class="card-header text-center">How to write a good article</div>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            </p>
          </div>
          <div class="card-footer text-center text-muted">by Dan Dannison</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <button type="button" class="btn btn-outline-dark m-2">
                      <i class="bi-google" role="img" aria-label="Gmail"></i>
                  </button>
                  <button type="button" class="btn btn-outline-dark m-2">
                      <i class="bi-github" role="img" aria-label="GitHub"></i>
                  </button>
                  <button type="button" class="btn btn-outline-dark m-2">
                      <i class="bi-linkedin" role="img" aria-label="LinkedIn"></i>
                  </button>
                  <button type="button" class="btn btn-outline-dark m-2">
                      <i class="bi-medium" role="img" aria-label="Medium"></i>
                  </button>
              </ul>
              <span>&copy; 2022 Iurii Golubnichenko</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import TreeView from './components/TreeView.vue';

export default {
  components: {
    TreeView
  }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Courier New", Courier, monospace;
    font-size: 16px;
    color: black;
    height: 100vh;
    background: white;
    padding: 10px;
  }

  .slogan {
    font-family: "Acme", sans-serif;
    font-size: 30px;
    background: linear-gradient(
      99deg,
      rgba(238, 188, 78, 1) 0%,
      rgba(84, 83, 83, 1) 50%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
