<template>
  <div id="exhibit">
    <div class="navbar">
      <img src="../assets/noah.png" class="logopic">
      <div>
        <ul id="filters" class="menu">
          <li v-for="tag in tags">{{tag.display}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'exhibit',
    data () {
      return {
        tags: [{
          name: 'all',
          display: '全部'
        }, {
          name: 'portrait',
          display: '人像'
        }, {
          name: 'stage',
          display: '剧照'
        }, {
          name: 'documentary',
          display: '记录'
        }]
      }
    }
  }
</script>

<style scoped>
  .logopic {
    width: 60px;
    height: 40px;
    margin: 20px auto;
  }
  
  .navbar.affix {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    width: 100%
  }
  
  .navbar {
    z-index: 9999;
    width: 100%;
    text-align: center;
    background-color: #FFF;
    padding: 10px;
  }
  
  .navbar:focus {
    outline: 0;
  }
  
  .navbar ul {
    padding: 0;
    list-style: none;
    line-height: 1;
    font-size: 4em;
    display: inline-block;
  }
  
  .navbar ul li {
    float: left;
    display: block;
    margin: 0 15px;
    padding: 2px 0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #b5b5b5;
    -webkit-transition: background 0.3s ease-out;
    -moz-transition: background 0.3s ease-out;
    transition: background 0.3s ease-out;
  }
  
  .navbar li:hover,
  .navbar li:focus {
    text-decoration: none;
    color: #333;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background 0.3s ease-in-out;
  }
  
  .navbar li.active {
    outline: 0;
    background-color: transparent;
    color: #d94f5c;
    border-bottom: 2px solid;
  }
</style>