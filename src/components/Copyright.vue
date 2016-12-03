<template>
  <div class="copyright">
    <p v-html="message"></p>
  </div>
</template>

<script>
export default {
  name: 'copyright',
  data () {
    return {
      message: 'Copyright &copy; 2014 | Noah Photography ICP备14022517号'
    }
  }
}
</script>

<style scoped>
  div {
    background: #ffffff;
    color: #ddd;
    padding: 0px;
    vertical-align: middle;
  }

  p {
    color: #afafaf;
    font-size: 11px;
    margin: 10px 0;
    text-align: left;
  }

</style>