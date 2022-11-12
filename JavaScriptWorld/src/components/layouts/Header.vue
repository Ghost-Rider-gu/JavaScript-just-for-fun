<template>
  <nav class="relative container mx-auto">
    <div class="flex items-center gap-5">
      <div class="pt-2">
        <a href="#">
          <img src="../../assets/images/logo.png" alt="JavaScript World logo" />
        </a>
      </div>
      <div class="pt-2 hidden lg:flex">
        <span class="slogan">
          Knowledge base of <strong>JavaScript</strong> for you
        </span>  
      </div>
    </div>
    <div class="hidden md:flex justify-between m-3 p-2 items-center bg-slate-100 md:justify-start md:space-x-10">
      <div class="hidden md:flex items-center space-x-10 justify-start lg:w-0 lg:flex-1">
        <a href="#" class="text-slate-700 font-semibold hover:text-blue-500"> REFRESH </a>
        <a href="#" class="text-slate-700 font-semibold hover:text-blue-500">
          <router-link to="/statistics"> STATISTICS </router-link>
        </a>
        <a href="#" class="text-slate-700 font-semibold hover:text-blue-500">
          <router-link to="/about"> ABOUT </router-link>
        </a>
        <a href="#" class="text-blue-500 font-semibold">
          <router-link to="/login"> LOG IN </router-link>
        </a>
        <a href="#" class="flex-row-reverse bg-blue-400 text-white font-semibold px-5 py-1 border-indigo-50 rounded-full shadow-xl hover:bg-blue-500">
          <router-link to="/register"> SIGN UP </router-link>
        </a>
      </div>
      <div class="hidden md:flex justify-end space-x-10 bg-slate-100 items-center md:flex-1 lg:w-0">
        <form>
          <input type="search" placeholder="Search in articles" aria-label="Search" class="bg-white text-slate-500 font-light px-5 py-1 border border-gray-100 rounded-l-full shadow-xl" />
          <button class="bg-white text-slate-500 font-light px-5 py-1 baseline border border-gray-100 rounded-r-full shadow-xl hover:bg-gray-100" type="submit">
            SEARCH
          </button>
        </form>
      </div>
    </div>    
  </nav>
</template>

<style scoped>
.slogan {
  font-family: "Acme", sans-serif;
  font-size: 26px;
  background: linear-gradient(
    99deg,
    rgba(238, 188, 78, 1) 0%,
    rgba(84, 83, 83, 1) 50%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;  
}
</style>
