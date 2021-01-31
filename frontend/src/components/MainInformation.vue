<template>
  <b-container>
    <div class="d-flex justify-content-around">
      <div v-show="domainInformation.name">
        <h4>Domínio: {{ domainInformation.name }}</h4>
      </div>
      <div v-show="domainInformation.ip_address">
        <h4>IP: {{ domainInformation.ip_address }}</h4>
      </div>
      <div v-show="domainInformation.web_hosting">
        <h4>Hospedado por: {{ domainInformation.web_hosting }}</h4>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts">
import CViewDomainDTO from "@/apis/domains/contracts/dtos/CViewDomainDTO";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainInformation extends Vue {
  @Prop() private domainInformation!: CViewDomainDTO;
}
</script>
