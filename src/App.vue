<template>
    <v-app id="app">
        <v-responsive class="overflow-y-auto">
            <v-main>
                <HomePage />
            </v-main>
        </v-responsive>
        <Footer />
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store, { STORE_KEY } from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component({
    components: {
        HomePage: () => import('@/components/HomePage.vue'),
        Footer: () => import('@/components/Footer.vue'),
    },
})
export default class App extends Vue {
    storeModule: any;

    // @Module
    beforeCreate() {
        const isModuleRegistered = Object.keys(this.$store.state).includes(STORE_KEY);
        if (!isModuleRegistered) this.$store.registerModule(STORE_KEY, store);
    }

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }
}
</script>

<style scoped></style>
