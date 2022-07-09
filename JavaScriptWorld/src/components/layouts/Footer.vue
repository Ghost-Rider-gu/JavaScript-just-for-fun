<template>
    <div class="row">
      <div class="col">
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <button type="button" class="btn btn-outline-dark m-2">
                      <a href="mailto:iurii.golubnichenko@gmail.com">
                        <i class="bi-google" role="img" aria-label="Gmail"></i>
                      </a>
                  </button>
                  <button type="button" class="btn btn-outline-dark m-2">
                      <a href="https://github.com/Ghost-Rider-gu" target="_blank">
                        <i class="bi-github" role="img" aria-label="GitHub"></i>
                      </a>
                  </button>
                  <button type="button" class="btn btn-outline-dark m-2">
                      <a href="https://www.linkedin.com/in/iurii-golubnichenko/" target="_blank">
                        <i class="bi-linkedin" role="img" aria-label="LinkedIn"></i>
                      </a>
                  </button>
                  <button type="button" class="btn btn-outline-dark m-2">
                      <a href="https://medium.com/@golubnichenko" target="_blank">
                        <i class="bi-medium" role="img" aria-label="Medium"></i>
                      </a>
                  </button>
              </ul>
              <span>&copy; {{ currentYear }} Iurii Golubnichenko</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
