<template>
  <b-container>
    <b-card-group
      v-for="(value, key, index) in JSON.parse(whois)"
      v-bind:key="index"
      deck
    >
      <b-card
        border-variant="success"
        header-bg-variant="success"
        header-text-variant="white"
        :header="key"
        class="text-center my-2"
      >
        <b-card-text>{{ value }}</b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WhoisCardList extends Vue {
  @Prop() private whois!: string;
}
</script>
