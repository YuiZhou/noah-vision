<template>
  <div id="app">
    <introduct v-scroll-to="'#main'"></introduct>
    <mainPage id="main"></mainPage>
  </div>
</template>

<script>
import Introduct from './components/Introduct'
import MainPage from './components/Main'

export default {
  name: 'app',
  components: {
    Introduct,
    MainPage
  }
}
</script>

<style>
body, html, #app {
	font-family:sans-serif; 
	text-rendering: optimizeLegibility !important;
	-webkit-font-smoothing: antialiased !important;
	color: #fff ;
	width: 100% !important;
	height: 100% !important;
	font-size:62.5%;
	margin: 0;
}
::-webkit-scrollbar {
  display: none;
}
</style>
