<template>
  <b-container fluid>
    <div class="my-5">
      <b-form
        @submit.prevent="search(name)"
        novalidate
        inline
        class="d-flex justify-content-center"
      >
        <div>
          <label class="sr-only" for="feedback-name">Domínio</label>
          <b-input-group>
            <b-form-input
              v-model="name"
              :state="validation"
              id="feedback-name"
              placeholder="Seu domínio"
            ></b-form-input>
            <b-input-group-append>
              <b-button :variant="validationColor" type="submit">
                <span v-if="loading">Pesquisando...</span>
                <span v-else>Pesquisar</span>
              </b-button>
            </b-input-group-append>
          </b-input-group>
          <b-form-invalid-feedback :state="validation">
            Digite um domínio válido para nova busca.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Muito bom, vamos pesquisar!
          </b-form-valid-feedback>
        </div>
      </b-form>
    </div>
    <div>
      <div v-if="error.length" class="d-flex justify-content-center">
        <b-alert class="w-50" variant="danger" show dismissible fade>{{ error }}</b-alert>
      </div>
      <div v-if="domainInformation">
        <MainInformation :domainInformation="domainInformation" />
        <div v-if="domainInformation.whois">
          <WhoisCardList :whois="domainInformation.whois" />
        </div>
      </div>
    </div>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WhoisCardList from "@/components/WhoisCardList.vue";
import MainInformation from "@/components/MainInformation.vue";
import { namespace } from "vuex-class";
import isValidDomain from "is-valid-domain";
import CDomainDTO from "@/apis/domains/contracts/dtos/CDomainDTO";
import CViewDomainDTO from "@/apis/domains/contracts/dtos/CViewDomainDTO";

const domainModule = namespace("DomainModule");

@Component({
  components: {
    WhoisCardList,
    MainInformation,
  },
})
export default class Home extends Vue {
  private name = "";

  @domainModule.State
  public domainInformation!: CViewDomainDTO;

  @domainModule.State
  public loading!: boolean;

  @domainModule.State
  public error!: "";

  @domainModule.Mutation
  public mutationLoading!: (loading: boolean) => void;

  @domainModule.Action
  public actionDomainInformation!: ({ name }: CDomainDTO) => CViewDomainDTO;

  get validation(): boolean {
    return isValidDomain(this.name);
  }

  get validationColor(): string {
    return this.validation ? "success" : "danger";
  }

  search(name: string) {
    if (this.validation) {
      this.actionDomainInformation({ name });
      this.name = "";
    }
  }
}
</script>