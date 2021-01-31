<template>
  <b-container class="d-flex flex-column justify-content-center align-items-center">
    <div>
      <b-img fluid :src="require('../assets/logo.png')" alt="Image 1"></b-img>
    </div>
    <div>
      <HelloWorld msg="Umbler challange using Vue.js + TypeScript" />
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class About extends Vue {}
</script>
