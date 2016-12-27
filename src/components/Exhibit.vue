<template>
  <div id="exhibit">
    <div :class="{navbar:true, affix:affixed}">
      <img src="../assets/noah.png" class="logopic">
      <div>
        <ul id="filters">
          <li v-for="tag in tags" :class="{active: tag.name === active}" @click="show(tag.name)">{{tag.display}}</li>
        </ul>
      </div>
    </div>
    <div class="portfolio">
      <waterfall line="v" :line-gap="fixedWidth + 12" :max-line-gap="492" :watch="display" :fixed-height="false" align="center">
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot class="waterfall-slot" v-for="(photo, index) in display" :width="fixedWidth + 12" :height="photo.h * fixedWidth / photo.w + 12"
          :order="index">
          <img class="preview-img thumb" :src="photo.thumb" @click="$refs.previewer.show(index)">
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
import EventListener from './EventListener'

export default {
  name: 'exhibit',
  components: {
    waterfall: Waterfall.waterfall,
    'waterfall-slot': Waterfall.waterfallSlot,
    previewer: Previewer
  },
  props: {
    offset: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      affixed: false,
      active: 'all',
      tags: PortfolioConfig,
      portfolio: ImageFactory.workspace,
      photographs: ImageFactory.images,
      fixedWidth: 200,
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
    },
    scrolling () {
      const scrollTop = this.getScroll(window, true)
      console.log(scrollTop)
      const offset = this.getOffset(this.$el)
      if (!this.affixed && scrollTop > offset.top - this.offset) {
        this.affixed = true
      }
      if (this.affixed && scrollTop < this.initialTop - this.offset) {
        this.affixed = false
      }
    },
    getScroll (w, top) {
      let ret = w[`page${top ? 'Y' : 'X'}Offset`]
      const method = `scroll${top ? 'Top' : 'Left'}`
      if (typeof ret !== 'number') {
        const d = w.document
        ret = d.documentElement[method]
        if (typeof ret !== 'number') {
          ret = d.body[method]
        }
      }
      return ret
    },
    getOffset (element) {
      let elm = element
      let top = elm.offsetTop
      let left = elm.offsetLeft
      while (elm.offsetParent !== null) {
        elm = elm.offsetParent
        top += elm.offsetTop
        left += elm.offsetLeft
      }
      return {
        top,
        left
      }
    }
  },
  mounted: function () {
    // get the intial top number
    this.initialTop = this.getOffset(this.$el).top
    console.log('biubiubiu')
    this.scrollEvent = EventListener.listen(window, 'scroll', this.scrolling)
  },
  beforeDestory: function () {
    if (this.scrollEvent) {
      this.scrollEvent.remove()
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
    z-index: 999;
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
  
  .portfolio .waterfall-slot {
    padding: 6px;
  }
  
  .thumb {
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
    cursor: pointer;
    box-shadow: 0 0 3px 1px rgba(153, 153, 153, 0.6);
    -moz-box-shadow: 0 0 3px 1px rgba(153, 153, 153, 0.6);
    -webkit-box-shadow: 0 0 3px 1px rgba(153, 153, 153, 0.6);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
</style>