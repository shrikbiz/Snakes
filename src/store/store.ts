import {
  Action,
  Module,
  Mutation,
  MutationAction,
  VuexModule,
} from "vuex-module-decorators";
import store from ".";

export const STORE_KEY = "$_jobsearch";

@Module({
  namespaced: true,
  name: STORE_KEY,
  store: store,
})
export default class AppStore extends VuexModule {}
