<template>
  <div id="exhibit">
    <div class="navbar">
      <img src="../assets/noah.png" class="logopic">
      <div>
        <ul id="filters">
          <li v-for="tag in tags" v-on:click="show(tag.name)">{{tag.display}}</li>
        </ul>
      </div>
    </div>
    <div class="portfolio">
      <waterfall line="v" :line-gap="212" :watch="active" :fixed-height="true">
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot v-for="(photo, index) in display" :width="200" :height="photo.height * 200 / photo.width + 12" :order="index">
          <img class="thumb" v-bind:src="portfolio + photo.thumb" />
        </waterfall-slot>
      </waterfall>
    </div>
  </div>
</template>

<script>
var Waterfall = require('vue-waterfall')

export default {
  name: 'exhibit',
  components: {
    'waterfall': Waterfall.waterfall,
    'waterfall-slot': Waterfall.waterfallSlot
  },
  data () {
    return {
      active: 'all',
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
      }],
      portfolio: '../../static/portfolio/',
      photographs: [{
        category: [ 'stage' ],
        thumb: 's1.jpg',
        src: '1.jpg',
        width: 900,
        height: 600
      }, {
        category: [ 'portrait' ],
        thumb: 's7.jpg',
        src: '7.jpg',
        width: 900,
        height: 600
      }, {
        category: [ 'portrait' ],
        thumb: 's11.jpg',
        src: '11.jpg',
        width: 600,
        height: 900
      }, {
        category: [ 'portrait' ],
        thumb: 's13.jpg',
        src: '13.jpg',
        width: 1067,
        height: 600
      }, {
        category: [ 'stage' ],
        thumb: 's2.jpg',
        src: '2.jpg',
        width: 900,
        height: 600
      }, {
        category: [ 'stage' ],
        thumb: 's17.jpg',
        src: '17.jpg',
        width: 1067,
        height: 600
      }, {
        category: [ 'stage' ],
        thumb: 's21.jpg',
        src: '21.jpg',
        width: 600,
        height: 900
      }, {
        category: [ 'stage' ],
        thumb: 's12.jpg',
        src: '12.jpg',
        width: 1067,
        height: 600
      }, {
        category: [ 'stage' ],
        thumb: 's19.jpg',
        src: '19.jpg',
        width: 1067,
        height: 600
      }, {
        category: [ 'documentary' ],
        thumb: 's3.jpg',
        src: '3.jpg',
        width: 900,
        height: 600
      }, {
        category: [ 'documentary' ],
        thumb: 's4.jpg',
        src: '4.jpg',
        width: 1280,
        height: 600
      }, {
        category: [ 'documentary' ],
        thumb: 's5.jpg',
        src: '5.jpg',
        width: 600,
        height: 900
      }, {
        category: [ 'documentary' ],
        thumb: 's8.jpg',
        src: '8.jpg',
        width: 900,
        height: 600
      }, {
        category: [ 'documentary' ],
        thumb: 's20.jpg',
        src: '20.jpg',
        width: 600,
        height: 900
      }, {
        category: [ 'documentary' ],
        thumb: 's10.jpg',
        src: '10.jpg',
        width: 1067,
        height: 600
      }]
    }
  },
  computed: {
    display: function () {
      if (this.active === 'all') {
        return this.photographs
      } else {
        var photos = []
        for (var i = 0; i < this.photographs.length; i++) {
          var photo = this.photographs[i]
          if (photo.category.indexOf(this.active) >= 0) {
            photos.push(photo)
          }
        }
        return photos
      }
    }
  },
  methods: {
    show: function (tagid) {
      this.active = tagid
    }
  }
}
</script>

<style scoped>
  /* navigator */
  
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
  /* portfolio */
  
  .portfolio {
    background: #fff;
    padding: 5px 0;
    overflow: hidden;
    text-align: center;
  }
  
  .portfolio waterfall {
    text-align: center
  }
  
  .thumb {
    position: relative;
    width: 200px;
    height: auto;
    margin: 6px;
    cursor: pointer;
    box-shadow: 0 0 3px 1px rgba(153, 153, 153, 0.6);
    -moz-box-shadow: 0 0 3px 1px rgba(153, 153, 153, 0.6);
    -webkit-box-shadow: 0 0 3px 1px rgba(153, 153, 153, 0.6);
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>