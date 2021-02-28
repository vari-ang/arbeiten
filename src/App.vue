<template>
  <div>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
      'app-footer': Footer 
  },
  data () {
      return {
      }
  },
  methods: {

  },
  computed: {
      
  }
}
</script>

<style lang="scss">
  $tabColor: #81c784;
  $buttonColor: #66bb6a ;

  // Justify text
  .justify { text-align: justify; text-justify: inter-word; }

  i.styled { color: $tabColor }

  .btn, button[type="submit"] {
        background-color: $buttonColor !important;
  }

  a { color: black; }

  /* TABS color */
  .tabs {
      // Black color to the text
      .tab a {
          background-color: white !important;
          color:$tabColor !important;
          // Text color on hover
          &:hover {
              background-color:#c5cae9;
              color:$tabColor !important;
          }

          // Background and text color when a tab is active
          &.active {
                background-color:white  !important;
                color:$tabColor !important;
          }
      }
  }

  .star { color: #F0E68C; }

  .chip{
    width: 100%;
    height: auto;
    // border-radius: 80px;
    // line-height: 80px;
  }

</style>
