<template>
  <div>
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="../../assets/images/logo.png"
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
  </div>
</template>

<style scoped>
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
