<template>
    <div
        style="max-height: calc(100vh - 56.8px); width: 100%; height: auto; margin-top: 0"
        align="center"
        justify="center"
    >
        <v-img height="calc(100vh - 56.8px)" src="@/assets/jungle.jpeg">
            <PlayGround />
        </v-img>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';

@Component({
    components: {
        PlayGround: () => import('@/components/PlayGround.vue'),
    },
})
export default class HomePage extends Vue {}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}
</style>
