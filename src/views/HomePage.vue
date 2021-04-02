<template>
    <div style="max-height: calc(100vh - 56.8px); width: 100%; height: auto" align="center" justify="center">
        <v-row
            v-for="row in 15"
            :key="row"
            :style="{
                marginTop: '10px',
                maxWidth: `${playGroundSize * 3}rem`,
                minHeight: '3rem',
                background: 'yellow',
            }"
        >
            <!-- :style="{, maxWidth: '60rem', minHeight: '3rem'; background: 'yellow'}" -->
            <v-col
                v-for="col in 15"
                :key="col"
                :style="{
                    maxWidth: '3rem',
                    minHeight: '3rem',
                    background: 'green',
                    border: 'solid white 1px',
                }"
                style="max-width: 3rem; min-height: 3rem; background: green; border: white solid 1px"
                >{{ row + col }}
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class HomePage extends Vue {
    playGroundSize: number = 15;
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}
</style>
