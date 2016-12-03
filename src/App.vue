<template>
  <div id="app">
    <introduct></introduct>
    <copyright></copyright>
  </div>
</template>

<script>
import Copyright from './components/Copyright'
import Introduct from './components/Introduct'

export default {
  name: 'app',
  components: {
    Introduct,
    Copyright
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
