<template>
    <header>
      <Header />
    </header>
    <main class="container flex flex-col-reverse md:flex-row items-center px-1 mx-auto mt-1 space-y-0 md:space-y-0">
      <aside class="flex flex-col mb-32 space-y-1 md:w-1/2">
        <TreeView />
      </aside>
      <article class="flex flex-col mb-32 space-y-12 md:w-1/2">
        <router-view></router-view>
      </article>
    </main>
    <footer>
      <Footer />
    </footer>
</template>

<script>
import TreeView from './components/TreeView.vue';
import Footer from './components/layouts/Footer.vue';
import Header from './components/layouts/Header.vue';

export default {
  components: {
    TreeView,
    Footer,
    Header
}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: black;
  background: white;
  padding: 20px;
}
</style>
