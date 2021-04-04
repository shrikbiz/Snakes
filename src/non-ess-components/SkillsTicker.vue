<template>
  <InfiniteScrollBar
    :barStyle="{ background: '#121212', padding: '5px 0', height: '7rem' }"
  >
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem ; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem ; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem ; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem ; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
    <img
      style="width:5rem; margin: auto 5rem"
      src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
    />
  </InfiniteScrollBar>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    InfiniteScrollBar: () => import("@/helper/InfiniteScroll.vue"),
  },
})
export default class SkillsTicker extends Vue {}
</script>

<style scoped lang="scss">
* {
  font-family: Montserrat, sans-serif;
}
</style>
