<template>
    <div
        style="max-height: calc(100vh - 56.8px); width: 100%; height: auto; margin-top: 5rem"
        align="center"
        justify="center"
    >
        <PlayGround />
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
