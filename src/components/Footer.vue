<template>
    <v-footer color="headerPrimary" padless>
        <v-row no-gutters justify="center">
            <v-col class="py-4 text-right white--text" cols="auto">
                Author:
                <a href="mailto: shrikbiz@gmail.com" style="text-decoration: none; color: white">
                    <strong>Shrikant Patel</strong>
                </a>
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text" cols="auto">
                |
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text" cols="auto">
                <a href="https://www.linkedin.com/in/patel-shrikant/" style="text-decoration: none">
                    <v-icon color="white">mdi-linkedin</v-icon>
                </a>
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text" cols="auto">
                |
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text" cols="auto">
                <a href="https://github.com/shrikbiz/" style="text-decoration: none">
                    <v-icon color="white">mdi-github</v-icon>
                </a>
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text" cols="auto">
                |
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text" cols="auto">
                <a href="https://www.instagram.com/shrikbiz.js/" style="text-decoration: none">
                    <v-icon color="white">mdi-instagram</v-icon>
                </a>
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text" cols="auto">
                |
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text" cols="auto">
                <a href="https://shrikbiz.medium.com/" style="text-decoration: none">
                    <v-img
                        style="background: white"
                        alt="medium logo"
                        class="shrink mr-2"
                        contain
                        src="@/assets/medium.png"
                        maxWidth="100"
                    />
                </a>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>
