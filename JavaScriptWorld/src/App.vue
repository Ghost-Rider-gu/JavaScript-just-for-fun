<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col">
        <TreeView />
      </div>
      <div class="col">
        <Article />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TreeView from "./components/TreeView.vue";
import Article from './components/Article.vue';
import Footer from "./components/layouts/Footer.vue";
import Header from "./components/layouts/Header.vue";

export default {
  components: {
    TreeView,
    Article,
    Footer,
    Header,
  }
};
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
</style>
