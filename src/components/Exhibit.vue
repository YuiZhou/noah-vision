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
        <waterfall-slot v-for="(photo, index) in display" :width="200" :height="photo.h * 200 / photo.w + 12" :order="index">
          <img class="preview-img thumb" :src="photo.thumb" @click="$refs.previewer.show(index)">
          <!--<img class="thumb" v-bind:src="portfolio + photo.thumb" />-->
        </waterfall-slot>
      </waterfall>
      <previewer :list="display" ref="previewer" :options="options"></previewer>        
    </div>
  </div>
</template>

<script>
import Waterfall from 'vue-waterfall'
import Previewer from './Previewer'
import ImageFactory from '../assets/image-factory.js'
import PortfolioConfig from '../assets/portfolio-config.js'

export default {
  name: 'exhibit',
  components: {
    waterfall: Waterfall.waterfall,
    'waterfall-slot': Waterfall.waterfallSlot,
    previewer: Previewer
  },
  data () {
    return {
      active: 'all',
      tags: PortfolioConfig,
      portfolio: ImageFactory.workspace,
      photographs: ImageFactory.images,
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.preview-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  },
  computed: {
    display: function () {
      var photos = []
      for (var i = 0; i < this.photographs.length; i++) {
        var photo = this.photographs[i]
        if (this.active === 'all' || photo.category.indexOf(this.active) >= 0) {
          photos.push({
            h: photo.h || 0,
            w: photo.w || 0,
            thumb: this.portfolio + photo.thumb,
            src: this.portfolio + photo.src
          })
        }
      }
      return photos
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
    /*z-index: 9999;*/
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