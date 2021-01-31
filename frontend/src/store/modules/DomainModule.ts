import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import CDomainDTO from '@/apis/domains/contracts/dtos/CDomainDTO';
import CViewDomainDTO from '@/apis/domains/contracts/dtos/CViewDomainDTO';
import { showDomainService } from '@/apis';

@Module({ namespaced: true })
export default class DomainModule extends VuexModule {
    public loading = false;
    public error = '';
    public domainInformation: CViewDomainDTO = {
        name: '',
        ip_address: '',
        whois: '',
        web_hosting: '',
    };

    @Action({ commit: 'mutationDomainInformation' })
    actionDomainInformation({ name }: CDomainDTO) {
        this.context.commit('mutationLoading', true);
        showDomainService.execute({ name }).then(domainInformation => {
            this.context.commit('mutationDomainInformation', domainInformation);
            this.context.commit('mutationError', '');
        }).catch((error) => {
            this.context.commit('mutationError', error.response.data.msg);
        }).finally(() => {
            this.context.commit('mutationLoading', false);
        });
    }

    @Mutation
    public mutationDomainInformation(domainInformation: CViewDomainDTO): void {
        this.domainInformation = domainInformation;
    }

    @Mutation
    public mutationLoading(loading: boolean): void {
        this.loading = loading;
    }

    @Mutation
    public mutationError(error: string): void {
        this.error = error;
    }
}