<template>
  <div class="container">
    <exhibit></exhibit>
    <hr/>
    <contact></contact>
    <copyright></copyright>
  </div>
</template>

<script>
  import Exhibit from './Exhibit'
  import Contact from './Contact'
  import Copyright from './Copyright'

  export default {
    name: 'main-page',
    components: {
      Exhibit,
      Contact,
      Copyright
    }
  }
</script>

<style scoped>
  hr {
    width: 100%;
    height: 1px;
    color: #CCC;
    border: none;
  }

  .container {
    position: relative;
    width: 960px;
    margin: 0 auto;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  
  @media only screen and (min-width:768px) and (max-width:959px) {
    .container {
      width: 768px;
    }
  }
  /*  #Mobile (Portrait) - Note:Design for a width of 320px */
  
  @media only screen and (max-width:480px) {
    .container {
      width: 100%;
    }
  }
  /* #Mobile (Landscape) - Note:Design for a width of 480px */
  
  @media only screen and (min-width:480px) and (max-width:767px) {
    .container {
      width: 70%;
    }
  }
  /* #Clearing */
  /* Self Clearing Goodness */
  
  .container:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
</style>